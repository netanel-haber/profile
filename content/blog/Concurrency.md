---
title: Concurrency
description: Yes, Python has threads (*Sigh*)
date: September 20, 2021
order: 2
---

# Concurrency

This article aims to explain basic concepts related to concurrency, which is used to solve performance related problems. It starts and ends with Python (CPython, mostly), as a tie from and back into reality - but isn't really about Python at all. Actually, it isn't about any language, framework or library in particular. It aims to take a step back from questions of application and start from first principles.

Let's start by stating some facts about python concurrency. They may seem contradictory or confusing - the rest of the article aims to provide more clarity as to how they make sense together. It should be noted that some of these facts pertain to a standard use of Python - it is possible to bypass some limitations, either by using a less popular Python implementation, or by using non-standard [tools](https://numba.pydata.org/) and libraries.


1. **Python has threads.**
   If anyone says otherwise, they have important [standard](https://docs.python.org/3/library/threading.html) Python [modules](https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ThreadPoolExecutor) to explain away.
2. **Python threads are useful**. [Here are numbers for you to look at](https://replit.com/@NetanelHaber/pythonthreads?v=1).
3. **No parallelization in python**: CPython threads cannot solve **every** problem threads are put to use for in languages like C and C++.
4. **Multi-processing can provide parallelization in Python**, although in practice the performance overhead will sometimes cancel out or severely reduce the wanted benefit[^1].

So what is the rule? When is multi-threading useful? Why is Python different than some other languages?

### Types of work

Two basic concepts in this space are <term>[CPU-bound](https://en.wikipedia.org/wiki/CPU-bound)</term> and <term>[I/O-bound](https://en.wikipedia.org/wiki/I/O_bound)</term> (Input/Output) work. It helps to first state a basic fact: Computers have a fundamental bottleneck - they cannot execute more than one command at any time. Modern "computers" actually contain multiple computation units that can each execute one command at any given time. To compare the two types of work, we will first look at a single CPU core.

#### Multithreading CPU-bound work on a single core - the same work with extra steps

If we task this computer with calculating `(2 ^ 19) / (3 ^ 33)`, it will boil the task down to a list of discreet commands to execute[^2]. This is very similar to human calculation. Say we've neared the end of a meal at a restaurant. We have two tasks ahead of us: Calculating the tip and calculating when to leave in order to catch a bus. The former calculation may penalize us `X` of our time, while the latter may take `Y` of our time. In other words, altogether `X+Y` work must be done. The "brain-power" (=time) will be spent, regardless of the way the work is divided, sliced or diced. **This is CPU-bound work.**

#### A watched pot never boils

Now the computer is tasked with scraping Google search results. It receives a term as an argument and must retrieve the first 10 pages of results. So it:

1. Asks for the first page [10ms].
2. **Waits for the result to return from Google servers [80ms].**
3. Receives the result and saves it in a file [10ms].

It then repeats these steps for all 10 pages.
The execution times are just an example, but resemble real-world times for similar programs. So let's focus on 2 - it seems to be our performance bottleneck, at 80% of all execution time. The key word here is **waiting**. We have such a powerful tool at our disposal, and it mostly waits - i.e., does nothing, for most of our program. That's pretty unsavory. Next time you plan something with friends, try waiting for each friend to confirm before asking the next friend. **This is I/O-bound work**.

So a <term>CPU-bound</term> task is one where the primary performance bottleneck is actual **work** that cannot be avoided. An <term>I/O-bound</term> task is one where the primary performance bottleneck is actually just **waiting** for an external piece of data.

It is common sense that alleviating performance pain for problems with different bottlenecks will look different for each type of task. This is actually the key to our primary question. assessing the type of work before us - CPU, I/O or a mixture of both - can help us know in advance if certain solutions are applicable.

### Enhancing Performance

So for the first calculation task, we have a discreet list of commands we need to execute. Any unit can only execute one line at a time. We've already mentioned modern computers have many such units. So, for a slow program, the solution seems clear - divide and conquer. We divide our computation into smaller coherent parts (so we can assemble the solutions later for the final product), and give each available unit in the computer one part at a time to execute. For example, if we have a computation that can take 8X time, that can be divided into 8 smaller computations that each can take X time - and we have 8 cores - we can now accomplish this task in X time. This means that in order to enhance performance for CPU-bound tasks we need <term>parallelization</term> - computing simultaneously on multiple units.

The second task, where we were mostly waiting, can complete faster by being able to do other work while waiting. In the wild, you might see the term <term>asynchronous</term> used to describe such programs that allow for doing work while waiting, depending on the language or framework. We will use this term as well[^3].

On a side note, let's notice a subtle difference between the enhancements we may gain from optimizing both types of work. While both parallelization and asynchronous solutions can **save on overall execution time**, they cannot both **reduce CPU usage and resources**.

Consider 10 taps that produce 10L of water an hour. We need 100 liters altogether, so we're smart - we use 10 bottles and run all 10 taps at once. This should get us done in a minute, rather than 10 minutes. The trouble is the guy that arrived with us is also smart, and wants his 100L's worth of water too. This is the trouble with CPU work - the computer is capped at how much work it can accomplish simultaneously. To this end, "optimizing" your program by parallelizing its work doesn't really improve anything in terms of the amount of hard work that needs to be completed[^4].

In contrast, optimizing I/O bound programs can actually **reduce CPU usage** - one problem with I/O bound programs is that they needlessly waste CPU resources. In the best case scenario, we can get rid of almost all of the idle CPU time - which can be used to do more work[^5] [^6].

### Concurrency

So, CPU bound tasks could use parallel computing to achieve better performance, while for I/O bound tasks we would simply try to do more work while waiting. Generally, the blanket term for any solution for both of these bounds is <term>concurrency</term>. This denotes programs that cannot be thought about sequentially - in order to achieve either solution, the language will now expose syntax and interfaces that, while affording us the performance benefits of concurrent code, prevent us from being able to read our programs "line after line". It will now be possible for different bits of our programs to execute out of order.

Let's pause to list the terms we've encountered:

<table>
  <thead>
   <tr>
      <th colspan="2">Concurrency</td>
    </tr>
    <tr>
      <th>I/O-bound</th>
      <th>CPU-bound</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Asynchronous Programming</td>
      <td>Parallel Programming</td>
    </tr>
  </tbody>
</table>

#### Challenges on the way to real-world solutions

As mentioned, different frameworks expose different interfaces to programmers for writing concurrent code. Fundamentally, there are two challenges for language designers:

1. **Implementation** - Developing the actual implementation(s) and mechanism(s) to allow for such code to run. This is not a trivial problem, especially if existing languages want to introduce new solutions.
2. **Interface** - Exposing the syntax and high-level tools with which users may interact with the implementations. This is also not a trivial problem - as mentioned, thinking about concurrent code isn't straightforward. Accordingly, a good language will look for interfaces that allow for expressing concurrent code in a readable, easy-to-reason-about way.

Let's give an example for a challenge on the implementation side. Cpython suffers from the <term>[GIL](https://www.youtube.com/watch?v=KVKufdTphKs)</term> - the global interpreter lock. This means that the python interpreter cannot run more than one line of python bytecode at any given time. This means that Python effectively bans parallelization (**within the same process** - more on this soon), and therefore cannot improve the execution time of CPU-bound programs using concurrency[^7].

Let's look at another example for a challenge, this time on the interface side. Javascript, an async language by default, used to only allow running code asynchronously using callbacks functions. These functions are passed to async calls (like api requests). These callbacks will eventually run with the result of async operations and execute side effects, such as displaying the result of the request on the page. Once we register a callback, we can continue working while the resource fetches.

This pattern suffered from a problem dubbed <term>["Callback Hell"](http://callbackhell.com/)</term>, where dependent chains of asynchronous calls, which by necessity meant nested callbacks, caused increasing right-indentation of code, until the final callback code started on the 100th column, say.

  <pre>
  This
              isn't
                          a
                                  pleasant
                                                  read.</pre>

Addressing this, JavaScript introduced the [Promise API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[^8].

### A Taste of Real-world Concurrency

Let's take a cursory look at 3 basic archetypes of concurrency solutions, using a shoe factory as analogy.

1. <term>Multiprocessing</term> - multiprocessing can reduce the execution time of **both** types of work. It involves using multiple OS processes within the same program, and coordinating between them. It is slow and very resource consuming in comparison with other concurrency solutions. If we use Python as an example, every process we spawn to run our code will, for example, contain its own running Python interpreter including the initial overhead of starting the process and the interpreter.

   Multiprocessing is analogous to building a brand new shoe factory for every order of shoes we receive, rather than using existing factories to produce multiple shoes. Every factory has an enormous initial construction overhead, it takes up a lot of real estate, and sharing resources and information between the factories is very slow.
   Back to Python: The GIL, which limits Python execution to one line at a time, only enforces its lock within the same process since every process is its own complete Python entity. This means that Python can allow real cpu parallelization using multiprocessing (refer to [^1])

2. <term>Multithreading</term> - multithreading is a tricky, widely available solution for lean concurrency with shared resources within the same process. Threads are lighter execution units than processes. Let's refer back to the factory analogy. Here, we use just the one factory (=process) to run our code. We achieve concurrency by employing many workers to perform many tasks. The workers share the factory facilities and machines, so we save big on resources. If they can work at the same time (=in parallel), we can produce more in a given time (<term>CPU-bound</term> work). 

   It is important to state that multithreading can also provide performance benefits for (<term>I/O-bound</term> work). In languages with a GIL like Python, we effectively only allow one employee to work at any given time, and we switch between them. Why is this still useful? Workers, when not idle, can schedule deliveries, start long-running processes on machines, etc. - so if our factory mostly consists of kick-starting autonomous tasks (<term>I/O-bound</term> work), multiple employees can still accomplish much more than a single employee. With the meager time each employee is given, he can start some independent task, such as scheduling a delivery. We immediately yell "freeze!" and transfer the working rights to another worker. He too, registers some task. When we return to the first worker, our delivery has already arrived, and our worker can program a processing machine before we freeze him again.

   Back to reality. While multithreading is the ideal solution for CPU-bound work, it is less than ideal for I/O bound work. Even in a language that allows multi-threaded parallelism, our program still has idle CPU usage while any given thread waits for some I/O operation to complete. In addition, context switching between threads is time consuming, and as running permission is a zero-sum game, every millisecond of time given to one thread is a millisecond taken from another. So every thread is still resource consuming (though much leaner than a full process).

3. <term>Asynchronous Tasks</term>- This solution is relevant to I/O bound work, and can solve the wasted resource issues highlighted in the previous paragraph when using multithreading for I/O bound work. This is the final improvement to our factory, and it includes paying one of our employees more so he's willing to "multi-task".

   Now, we hire a supervisor and buy a whiteboard. Our supervisor's job is to provide our employee with tasks to do when a task is completed. The worker schedules some delivery. Instead of waiting for the delivery, he first writes on the whiteboard: "Supervisor, please let me know when the delivery has arrived for further processing". Then he can immediately begin scheduling another delivery, or operating on deliveries from yesterday. The supervisor keeps an eye on the loading dock, and eventually the first delivery arrives. He erases the task from the whiteboard and tells the worker, who begins processing the delivery that just arrived. And so on.

   So this solution requires a couple of components, but it can saves immensely on resources when the work is mostly I/O bound - it needs a single thread for our actual code (the worker), and some constant number of other threads and data structures to inform our thread of new tasks and keep an eye out for completed async operations (the supervisor) and keep tabs on registered tasks (the whiteboard). Our code registers some async task, and requests to be notified when it returns with the results. It notifies the framework what it wants to do with the result, but the syntax of how it is notified and the underlying objects are very framework and languages specific.

### Back to buzzwords

The only way to get <term>parallelization</term> in Python - in order to reduce execution time for <term>CPU-bound</term> programs, is <term>multi-processing</term>, because of the <term>GIL</term>. This, by definition, doesn't come with shared resources like <term>multi-threading</term> - so there's a large performance and resource penalty. This is not to say that threads have no use in Python - they may be used for reducing execution time for <term>I/O bound</term> programs. Another Python-native alternative that can accomplish basically the same thing is the newish [asyncio](https://docs.python.org/3/library/asyncio.html) library, that enables asynchronous code with a single thread.

### Ack

**Writing and resources about concurrency that I like:**

1. Great [talk](https://www.youtube.com/watch?v=lJ3NC-R3gSI) by Steve Klabnik.
2. Great [chapter](https://eloquentjavascript.net/11_async.html) about async in eloquentJS, an outstanding book.

**Friends that helped**

1.  Yoav Tzfati helped clean up my Python code
2.  Naomi Kriger and Yoav read my drafts

[^1]: A Python developer friend of mine offered up the following heuristic: If you find yourself reaching for multi-processing in order to incorporate parallel code execution, it's time to choose a different language for this particular task.
[^2]: For brevity, we also implicitly disregard a further step where parallelism can come in handy - some calculations may perhaps allow for non-sequential execution of certain steps. This doesn't diminish the point, though. Say we've found the most reduced version of the algorithm, split among as many units as possible. We are still left with "hard" work needing to be completed. So we've tried our best to reach a solution in as little time as possible - but we still need to bite the bullet of real work needing to be done.
[^3]: Although you would be hard pressed to justify the semantics, based on needle-thin differences between the dictionary definitions of some of the above terms.
[^4]: I think that for a programmer like me, who's written only consumers - programs that just consume computing power - it may be harder to understand this perspective. Once you write a provider, such as an operating system, you suddenly understand this. You own **all** of the resources - so when you parallelize management processes you'll notice you're stepping on your own toes - all of your programs are standing in line for water.
[^5]: We can also quantify CPU usage as energy expenditure to further illustrate the point. There is no "free" energy - to this end, parallelizing CPU-bound programs cannot save energy. Async code also cannot save energy - but it **can** minimize wasting energy. A more concise (but, in reality, wrong) framing of this idea is that the ideal program is only bound by CPU usage, as a program where we've solved all I/O issues is left with only CPU usage. This program doesn't exist, except in theory. I/O includes loading the next CPU instructions and reading registers as well, for example. In addition, These are not the only two bounds a program may have, for example another extremely important bound is <term>[memory](https://en.wikipedia.org/wiki/Memory-bound_function)</term>, and a program is a tradeoff between all bounds.
[^6]: A clock-cycle saved is a clock-cycle earned. This key insight, that a best case scenario asynchronous framework may reduce CPU usage, is what allows event-driven servers to serve many concurrent requests when the requests are mostly I/O bound. A new thread need not be created to serve every request - this can save an enormous amount of resources, in contrast with a thread-per-request framework which is capped by the realistic amount of threads that the server can maintain, thus severely limiting the vertical scaling of the server's possible concurrent requests.
[^7]: Assuming only one line of Python bytecode is running allowed the writers of python interpreters to write simpler implementations. The trouble is, years later multi-threaded parallelization became important to many programming fields where performance is crucial. Now, existing Python implementations such as CPython are in trouble because the one-line assumption is fundamentally baked in to the underlying C and lifting the GIL as-is would break the interpreter. The ["Gilectomy"](https://www.youtube.com/watch?v=B_cQ0ykux_4), an attempt to remove the GIL from CPython, is a demonstration to that effect.
[^8]: This allows us to transform nested callbacks into a list, eliminating callback nesting. Not much later, the language introduced a syntactical wrapper for the promise API that uses the <term>await</term> keyword. This is an adoption of [syntax](https://en.wikipedia.org/wiki/Async/await) common to many languages, which enables giving asynchronous code a synchronous look, therefore arguably improving readability.
