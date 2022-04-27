const promiseA = Promise.reject("a failed");
const promiseB = new Promise((_, reject) =>
  setTimeout(() => reject("b failed"), 1000)
);
const promiseC = new Promise((_, reject) =>
  setTimeout(() => reject("c failed"), 2000)
);

Promise.any([promiseA, promiseB, promiseC])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
