let p = new Promise((resolve, reject) => {
  console.log("promise pending");
  setTimeout(() => {
    console.log("Fullfilled");
    // resolve("done");
    reject("not done");
  }, 5000);
});
console.log("promise resolved");
p.then((d) => {
  console.log(d);
}).catch((err) => {
  console.log(err);
});
