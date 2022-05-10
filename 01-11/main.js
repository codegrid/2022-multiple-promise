const promiseA = Promise.reject(new Error("a failed"));
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("b"), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("c"), 2000)
);

console.time("01-11 time");
Promise.race([promiseA, promiseB, promiseC])
  .then((result) => console.timeLog("01-11 time", result))
  .catch((error) => console.timeLog("01-11 time", error.message));
