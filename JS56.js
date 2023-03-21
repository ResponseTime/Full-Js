let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("resolved");
    resolve(69);
  }, 2000);
});

p1.then((res) => {
  console.log(res);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("resolved 2");
      resolve(34);
    }, 2000);
  });
  return p2;
})
  .then((res) => {
    return res;
  })
  .then((res) => {
    console.log(res + 2);
  });
