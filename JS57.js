let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("done");
    resolve(6);
  }, 2000);
});

p1.then((res) => {
  console.log(res);
});
p1.then((res) => {
  console.log(res + 1);
});
