---
title: Concurrency
description: Yes, Python has threads (*Sigh*)
date: September 20, 2021
---

# Concurrency

Does Python have threads?
Yes. If anyone says otherwise, they have important [standard](https://docs.python.org/3/library/threading.html) Python [modules](https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ThreadPoolExecutor) to explain away.

Are Python threads useful? Yes. [Here are numbers for you to look at](https://replit.com/@NetanelHaber/pythonthreads?v=1).

Can Python threads solve every problem threads are put to use for in languages like C and C++? No.

Can multi-processing solve this additional problem set? Not exactly[^1].

So what is the rule? When is multi-threading useful? Why is Python different than some other languages? As developers, it is useful to know whether different classes of solutions are applicable to a problem. Let's try to understand this, with minimal and gradual use of terminology and language-specific jargon.

### Types of work

Two crucial concepts in this space are <term>[CPU-bound](https://en.wikipedia.org/wiki/CPU-bound)</term> and <term>[I/O-bound](https://en.wikipedia.org/wiki/I/O_bound)</term> (Input/Output) work. It helps to first state the obvious: Computers have a fundamental bottleneck - they cannot execute more than one command at any time. Modern "computers" actually contain multiple computation units that can each execute one command at any given time. To compare the two types of work, we will first look at one such computing unit, that suffers from this bottleneck.

#### Multithreading CPU-bound work on a single core - the same work with extra steps

If we task this computer with calculating `(2 ^ 19) / (3 ^ 33)`, it will boil the task down to a list of discreet commands to execute[^2]. This is very similar to human calculation. Say we've neared the end of a meal at a restaurant. We have two tasks ahead of us: Calculating the tip and calculating when to leave in order to catch a bus. The former calculation may penalize us `X` of our time, while the latter may take `Y` of our time. In other words, altogether `X+Y` work must be done. The time will be spent, regardless of the way the work is divided, sliced or diced. **This is CPU-bound work.**

#### A watched pot never boils

Now the computer is tasked with scraping Google search results. It receives a term as an argument and must retrieve the first 10 pages of results. So it:

1. Asks for the first page [10ms].
2. **Waits for the result to return from Google servers [80ms].**
3. Receives the result and saves it in a file [10ms].

It then repeats these steps for all 10 pages.
The execution times are just an example, but resemble real-world times for similar programs. So let's focus on 2 - it seems to be our performance bottleneck, at 80% of all execution time. The key word here is **waiting**. We have such a powerful tool at our disposal, and it mostly waits - i.e., does nothing, for most of our program. That's pretty unsavory. Next time you plan something with friends, try waiting for each friend to confirm before asking the next friend. **This is I/O-bound work**.

So a <term>CPU-bound</term> task is one where the primary performance bottleneck is actual **work** that cannot be avoided. An <term>I/O-bound</term> task is one where the primary performance bottleneck is actually just **waiting**.

It is common sense that alleviating performance pain for problems with different bottlenecks will look different for each type of task. This is actually the key to our primary question. assessing the type of work before us - CPU, I/O or a mixture of both - can help us know in advance if certain solutions are applicable.

#### Enhancing Performance

So for the first calculation task, we have a discreet list of commands we need to execute. Any unit can only execute one line at a time. We've already mentioned modern computers have many such units. So, for a slow program, the solution is clear - divide and conquer. We divide our computation into smaller coherent parts (so we can assemble the solutions later for the final product), and give each available unit in the computer one part at a time to execute. For example, if we have a computation that can take 8X time, that can be divided into 8 smaller computations that each can take X time - and we have 8 cores - we can now accomplish this task in X time. This means that in order to enhance performance for CPU-bound tasks we need <term>parallelization</term> - computing simultaneously on multiple units.

The second task, where we were mostly waiting, can complete faster by being able to do other work while waiting. In the wild, you might see the term <term>asynchronous</term> used to describe such programs that allow for doing work while waiting, depending on the language or framework. We will use this term as well[^3].

The two components of performance improvement that are under scrutiny here are faster execution time and minimizing CPU usage. Let's notice a subtle difference between the enhancements we may gain from optimizing both types of work. While both parallelization and asynchronous solutions can save on overall execution time, they cannot both minimize CPU usage.

Consider 10 taps that produce 10L of water an hour. We need 100 liters altogether, so we're smart - we use 10 bottles and run all 10 taps at once. This should get us done in an hour rather than 10. The trouble is the guy that arrived with us is also smart, and wants his 100L's worth of water. This is the trouble with CPU work - the computer is capped at how much work it can accomplish simultaneously. To this end, "optimizing" your program by parallelizing its work doesn't really improve anything in terms of the amount of hard work that needs to be completed[^4].

In contrast, optimizing I/O bound programs can actually lessen CPU usage - the problem with I/O bound programs is that they needlessly waste CPU power. In the best case scenario, we can get rid of almost all of the idle CPU time - which can be used to do more work. A clock-cycle saved is a clock-cycle earned[^5].

#### Solutions

#### (There is no such thing as a) "zero-cost-abstraction"

So, CPU bound tasks could use parallel computing to achieve better performance, while for I/O bound tasks we would simply try to do more work while waiting. Generally, the blanket term for any solution for both of these bounds is <term>concurrency</term>. This denotes programs that cannot be thought about sequentially - in order to achieve either solution, the language will now expose syntax and interfaces that, while affording us the performance benefits of concurrent code, prevent us from being able to read our programs "line after line". It will now be possible for different bits of our programs to execute out of order.

#### Reiterating discussed terms

Let's pause to list the terms we've encountered:

<term>CPU-bound</term> <-> <term>I/O-bound</term>;

<term>parallel</term> <-> <term>asynchronous</term>.

The last term is <term>concurrency</term>. The rest of this article will discuss real world implementations of concurrent code.

#### Real-world Solutions

As mentioned, different frameworks expose different interfaces to programmers for writing concurrent code. Fundamentally, there are two challenges for language designers:

1. **Implementation** - Developing the actual implementation(s) and mechanism(s) to allow for such code. This is not a trivial problem, especially if existing languages want to introduce new solutions.
2. **Interface** - Exposing the syntax and high-level tools with which users may interact with the implementations. This is also not a trivial problem - as mentioned, thinking about concurrent code isn't straightforward. Accordingly, a good language will look for interfaces that allow for expressing concurrent code in a readable, easy-to-reason-about way.

Let's give an example for a challenge on the implementation side. Python famously suffers from the <term>[GIL](https://www.youtube.com/watch?v=KVKufdTphKs)</term> - the global interpreter lock. This means that the python interpreter cannot run more than one line of python at any given time. If anything from the previous sections stuck with you, this means that Python effectively bans parallelization, and therefore cannot improve the execution time of CPU-bound programs with concurrency (**Within the same process** - more on this soon). Assuming only one line is running allows you to write nicer underlying implementations. Trouble is, years later suddenly multi-threaded parallelization became very important in all programming. Now, existing Python implementations such as CPython are in trouble because the one-line assumption is fundamentally baked in to the underlying C and lifting the GIL would break the interpreter. The ["Gilectomy"](https://www.youtube.com/watch?v=B_cQ0ykux_4), an attempt to remove the GIL from CPython, has yet to succeed and seems dead.

Let's look at another example for a challenge on the interface side. Javascript, async by default, used to only allow running code asynchronously using callbacks. Basically, we call some async function such as an http request. We would like to continue working though, as explained earlier. So we pass a "callback" to the http request function. This is a function that will run eventually with the result of the async operation and execute some side effect with it, such as changing the page the user is reading. We can then continue our work. This pattern famously suffered from a problem dubbed ["callback hell"](http://callbackhell.com/), where dependent chains of asynchronous calls, which by necessity meant nested callbacks, caused increasing right-indentation of code, until the actual final callback code started on the 100th column, say.

  <pre>
  This
              isn't
                          a
                                  pleasant
                                                  read.</pre>

Addressing this, Javascript introduced the Promise API. This allows

#### A Note

You may have noticed the body of this article has been, on the whole, blissfully clean of mentions of some important words: <term>threads</term>, <term>processes</term>, <term>promises</term> and <term>futures</term>, for example. In addition, languages are mentioned very sparingly. This is on purpose. For a beginner there is so much noise around this area, so many concepts, so much variance between languages and frameworks, that understanding a miracle.

### Ack

#### Stuff I like about async

1. Great Steve Klabnik talk
2. Async chapter in eloquent JS
3. talk on shared memory and multithreading?

#### Friends that helped

1.  Yoav Tzfati helped me clean up my Python code

[^1]: A Python developer friend of mine offered up the following heuristic: If you find yourself reaching for multi-processing in order to incorporate parallel code execution, it's time to choose a different language for this particular task.
[^2]: For brevity, we also implicitly disregard a further step where parallelism can come in handy - some calculations may perhaps allow for non-sequential execution of certain steps. This doesn't diminish the point, though. Say we've found the most reduced version of the algorithm, split among as many units as possible. We are still left with "hard" work needing to be completed. So we've tried our best to reach a solution in as little time as possible - but we still need to bite the bullet of real work needing to be done.
[^3]: Although you would be hard pressed to justify the semantics, based on needle-thin differences between the dictionary definitions of some of the above terms.
[^4]: I think that for programmers such as I, who have written only consumers - programs that consume computing power - it may be harder to understand this perspective. Once you write a provider, such as an operating system, you suddenly understand this. You own **all** of the resources - so when you parallelize management processes you'll notice you're stepping on your own toes - all of your programs are standing in line for water. Then, you will stop thinking of parallelizing as a free lunch.
[^5]: We can also quantify CPU usage as energy expenditure to further illustrate the point. There is no "free" energy - to this end, parallelizing CPU-bound programs cannot save energy. Obviously, async code cannot save energy as well - but it **can** minimize wasting energy. The most concise (but, in reality, wrong) framing of this idea is that the ideal program is only bound by CPU usage. Obviously, this program doesn't exist, except in theory. I/O includes loading the next CPU instructions and reading registers as well, for example. In addition, These are not the only two bounds a program may have, for example another very important bound is memory.

```

```
