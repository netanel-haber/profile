## Ok, Sometimes Async-Await

Normally, I continue believing that the classic (well, ES6) `promise.then().catch().finally()` is nicer than using the newer ES17 `async-await` syntax, because of function composability.
There are 2 cases where I think `async-await` is neater, and one where it may perceivably come in handy:

### 1. Early Return/Throwing Errors

```ts
async function returnEarly(): Promise<SomeType | undefined> {
  if (someCondition) return;
  await networkRequest();
  if (someOtherCondition) return;
  return await someOtherNetworkRequest();
}
```

This way, your function can return early concisely, **but still always return a `Promise`**.
This is because, all values returned from an `async function` are automatically wrapped in a `Promise` if they aren't already. The equivalent code is pretty ugly:

```ts
function returnEarly(): Promise<SomeType | undefined> {
  if (someCondition) return Promise.resolve();
  return networkRequest().then(() => {
    if (someOtherCondition) return Promise.resolve();
    return someOtherNetworkRequest();
  });
}
```

### 2. Promise Drilling

```js
async function hotPotato() {
  const a = await networkRequestA();
  const b = await networkRequestB(a);
  return await networkRequestC(a, b);
}
```

Sometimes, a computation requires a value several promises upstream. Using `async-await`, you see the entire function's scope trivially, so you don't need to drill down with the value.

The equivalent code is ugly:

```js
function hotPotato() {
  return A()
    .then((a) => B(a).then((b) => [a, b]))
    .then(([a, b]) => C(a, b));
}
```

### 3? \[object AsyncFunction\]

This does not generally strike me as useful, but can theoretically come in handy.

```ts
Object.prototype.toString.call(async () => producePromise()); // '[object AsyncFunction]'
Object.prototype.toString.call(() => producePromise()); // '[object Function]'
```

So the language gives us a way to know if a function was declared with the `async` modifier.
In some contrived scenario, we can imagine that it may be very useful to be able to check during runtime if the function will be asynchronous _before invoking it_.
