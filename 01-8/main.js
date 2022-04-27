const promiseA = Promise.reject(new Error("a failed"));
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("b"), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("c"), 2000)
);

Promise.any([promiseA, promiseB, promiseC])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
