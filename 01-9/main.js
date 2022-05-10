const promiseA = Promise.reject("a failed");
const promiseB = new Promise((_, reject) =>
  setTimeout(() => reject("b failed"), 1000)
);
const promiseC = new Promise((_, reject) =>
  setTimeout(() => reject("c failed"), 2000)
);

console.time("01-9 time");
Promise.any([promiseA, promiseB, promiseC])
  .then((result) => console.timeLog("01-9 time", result))
  .catch((error) => console.timeLog("01-9 time", error.message));
