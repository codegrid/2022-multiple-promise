const promiseA = Promise.resolve("a");
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("b"), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("c"), 2000)
);

console.time("01-1 time");
Promise.all([promiseA, promiseB, promiseC]).then((result) =>
  console.timeLog("01-1 time", result)
);
