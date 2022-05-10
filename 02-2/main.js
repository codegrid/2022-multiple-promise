const promiseA = Promise.resolve("a");
const promiseB = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("b rejected")), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("c"), 2000)
);

console.time("02-2 time");
Promise.allSettled([promiseA, promiseB, promiseC])
  .then((result) => console.timeLog("02-2 time", result))
  .catch((error) =>
    console.timeLog("02-2 time", error.message)
  );
