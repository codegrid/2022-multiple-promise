const promiseA = Promise.resolve("a");
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve(new Error("b failed")), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("c"), 2000)
);

Promise.race([promiseA, promiseB, promiseC])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
