const promiseA = Promise.resolve("a");
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve(new Error("b failed")), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("c"), 2000)
);

console.time("01-12 time");
Promise.race([promiseA, promiseB, promiseC])
  .then((result) => console.timeLog("01-12 time", result))
  .catch((error) =>
    console.timeLog("01-12 time", error.message)
  );
