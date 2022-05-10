const promiseA = Promise.resolve("a");
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("b"), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("c"), 2000)
);

console.time("01-4 time");
Promise.allSettled([
  promiseA,
  promiseB,
  promiseC,
]).then((result) => console.timeLog("01-4 time", result));
