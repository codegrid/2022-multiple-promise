const promiseA = Promise.resolve("a");
const promiseB = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("b rejected")), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("c"), 2000)
);

Promise.all([promiseA, promiseB, promiseC])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
