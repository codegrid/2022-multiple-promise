const promiseA = Promise.reject(new Error("a failed"));
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("b"), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("c"), 2000)
);

console.time("02-5 time");
Promise.any([promiseA, promiseB, promiseC])
  .then((result) => console.timeLog("02-5 time", result))
  .catch((error) =>
    console.timeLog("02-5 time", error.message)
  );
