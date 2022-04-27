const promiseA = Promise.resolve('a');
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve('b'), 1000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve('c'), 2000)
);

Promise.all([promiseA, promiseB, promiseC]).then((result) =>
  console.log(result)
);
