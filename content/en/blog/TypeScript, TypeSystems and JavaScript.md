---
title: TypeScript, TypeSystems and JavaScript
description: Notepad -> Notepad++
date: February 27, 2021
order: 1
---

# TypeScript, TypeSystems and JavaScript
<md-read-time :minutes="minutes"></md-read-time>

## Buzzwords

TypeScript (or “TS”) is a language built upon JavaScript (or “JS”), the primary (perhaps a vast, vast understatement) language used to program web applications. The term “built upon” is important here — TS is “strict superset” of JavaScript. This means that any valid JS program is also a valid TS program.

TypeScript (or TS) first appeared 9 years ago, in 2012\. It is written and maintained by Microsoft. It is now one of the [most popular](https://venturebeat.com/2020/12/02/github-python-and-typescript-gain-popularity-among-programming-languages/) programming tools in the world. If TS were a startup company, early investors would be breaking out the champagne. Without exaggerating, I think most webdevs would agree with me in thinking that it won’t be long before “vanilla” JS will no longer be shipped in any new commercial product. For anything more than a personal/hobby project, JS will be constrained in TS shackles.

If the last two paragraphs irritated you, you’re not alone — they irritate me as well, although true. Buzzwords cut through all articles promoting some library or another, and they make it impossible to make actual value judgements. Moreover, they distract the reader from actual trends and move the focus from concepts to products. If C# were to switch out Java in its inception, do we envision a vastly different developmental landscape in the 90s? I’d argue against that. Rather, Java and its viable alternatives heralded the well-known trend (and one of more popular religions) of Object Oriented Programming, or OOP.

## An Example

So, the following case for TypeScript is actually a general case for using a type system in JavaScript programming. TypeScript is just the current best-in-class (by a wide chasm), and an objectively excellent candidate for accomplishing this goal. Let’s examine a very simple function in JS:

```javascript
function multiply(x, y) {
  return x * y
}
```

Let’s call this function:

```javascript
multiply(2, 3) // = 6
```

So thats very nice. We have a function that multiplies two numbers. But let’s call it with a string:

```javascript
multiply(2, 'hello') // = NaN
```

This is obviously a nonsensical operation (although [in Python](https://www.pythoncentral.io/use-python-multiply-strings/) multiplying 2 by “hello” would return “hellohello”. This is adorable) — and we receive NaN, which is a special value in JS which means “not a number” (complying with the [IEEE 754 floating point standard](https://en.wikipedia.org/wiki/NaN)). So it was a syntactically legal operation, but I doubt anyone writing that function wants their function to be called with a string value. Accordingly, this function could be written in TS like this:

```typescript
function multiply(x: number, y: number) {
  return x * y
}
```

We’ve simply told TS that we don’t allow non number inputs to be given to the function. Now the second function call with the string value is illegal — TypeScript will yell at you and your editor will highlight it with red, mean squiggly lined until you change it, optionally forbidding you to ship your code until you do. This may seem annoying at first — you must sprinkle type hints all around the place for TS to be happy, and it will yell at you if you dont obey your own rules. Migrating most of my company’s codebase was a lesson in patience in that regard. But the effort pays off in compound down the road, and let’s examine why.

## So What

The [Python zen](https://www.python.org/dev/peps/pep-0020/) teaches us “Explicit is better than implicit” — users familiar with type systems (who are gawking at my “discovery” of a feature existing in languages for over 45 years) might think I’m invoking this rule for readability reasons — as in, any person reading my multiply function with type hints will know immediately that the inputs are 2 numbers. This is true (although, TS has very powerful type inference, such that in many cases you may leave off type hints). Another valid point would be the functionality aspect — as I’ve mentioned, calling multiply with “hello” is now impossible, which is a great thing.

For me, though, the most compelling case for type systems is more conceptual. TS forces you to explicitly fill your programs with assertions that mirror your assumptions about the program. Let’s rewrite our multiplication function:

```typescript
function fruitPrice(basePrice: number, quantity: number) {
  return basePrice * quantity
}
```

This function works great in dev with mock data, we receive the price of fruit from the server and the quantity from the client. Before pushing to production, the backend dev tells us that due to new architecture decisions, the price of certain fruit may be undetermined — now we may receive null, or an empty string when asking for the price of a fruit. Now when I call the price function with this new value, which may be undefined or a number, TypeScript yells because it know I am passing in a value which may not be a legal number.

Again, this is great — my function would fail without a rewrite. But the real lesson I can take from the squiggly lines is about my assumptions. TS punishes you for a lenient or thoughtlessly written piece of code — it forces you to reexamine what you think the program actually does. So fruitPrice will undoubtedly have to change, but now you know where you casually gave yourself a break by assuming a stricter subset of input than in reality. Now you know your program must take an undetermined price into account. TS will selflessly tell you where this assumption is relevant, but the real takeaway is forcing you to more strictly define your program.

## But TypeScript, Though

Something must be said about the tool in order to encourage its’ use, aside from touting the general benefits of a type system. So why TS, after all?

From a maintenance perspective, TS is, as mentioned, maintained by Microsoft. There are constant releases fixing bugs and meeting performance goals. New features are great, but really a dev needs to know that the project won’t [collapse](https://www.theregister.com/2020/03/26/corejs_maintainer_jailed_code_release/) because of a dangerous dependency on a small team’s free time, and that the project won’t be [forgotten](https://en.wikipedia.org/wiki/CoffeeScript) after a swift period of adoption. There are no guarantees, obviously, and no project lasts forever. But, for now, it seems like the buzzword period is mostly over — and the aftermath is major [libraries](https://angular.io/guide/typescript-configuration) and [technologies](https://deno.land/) have adopted TS, or [at least actively maintain type declaration files and tooling](https://reactjs.org/docs/static-type-checking.html#typescript) for consumers. Bet on TypeScript.

I think one of the reasons for TS’s steady success is its’ core product — type systems for JS. It has cultivated many features that were eventually swallowed into vanilla JS — [optional chaining](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining), what seems like [direct inspiration for JS es2015 classes](https://www.typescriptlang.org/docs/handbook/classes.html), [nullish coalescing](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing) etc. But really, the main feature which browsers cannot adopt is the type system — JS is inherently dynamic, and a type system is a radical change browsers cannot simply add in. So by not competing with juggernaut browsers over its’ main feature, it can prevail safely without fearing a sudden hostile takeover.

From a non maintenance perspective, TS has built its’ type system around widely used JS patterns. One example is that the TS type system is [structural](https://en.wikipedia.org/wiki/Structural_type_system) rather than nominal — basically, that one value is equivalent to another if it shares the structure of the other value. For example, a function that recieves { a: number; } as an argument, will also accept { a: number; b: number; } — the second type can be treated as the first type for all intents and purposes that the first type is used for in the function.

In many other type systems, types can act in for other types only if an explicit (=nominal) relationship was tied between them, such as inheritance. A structural type system fits the JS pattern of constant usage of anonynous objects and values (including functions), without explicitly calling constructors and so forth. Forcing nonimal typing on existing JS code would change the style and patterns devs are used to. This is not the only advantage to a structural type system, but it illustrates the thinking behind the language design. For more on the unique fit between TS and JS (I didn’t even touch on the functional aspect), I strongly recommend watching [this talk](https://www.youtube.com/watch?v=jmPZztKIFf4) by [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg).

## Giving the Web Context

In a final note, moving this text from notepad to an actual text editor with a spellchecker has shamefully revealed many squiggly lines, red, blue and green. In an imperfect analogy, JS editors have long had red lines for syntax errors (a.k.a. spelling mistakes). TS is more than a library, as it introduces a feature entirely impossible in current JS — green and blue squiggly lines, for contextual and grammatical errors. Suddenly my programs are more than blocks of black text, they speak to me and challenge my assumptions. So while we roll in the [slim surplus of cash](https://insights.stackoverflow.com/survey/2020#technology-what-languages-are-associated-with-the-highest-salaries-worldwide) we supposedly make by writing TS over plain JS, let’s all collectively move our programs from notepad to a text editor.

[Originally published on February 27, 2021, on Medium](https://medium.com/@netanel.t.haber/typescript-typesystems-and-javascript-83153f249ce3?source=post_page-----83153f249ce3--------------------------------)
