let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(29);
  }, 12000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(9);
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(43);
    reject(434);
  }, 2000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled([p1, p2, p3]).then((res) => {
//   console.log(res);
// });

// Promise.race([p1, p2, p3]).then((res) => {
//   console.log(res);
// });

Promise.any([p1, p2, p3]).then((res) => {
  console.log(res);
});
