let func = async () => {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 2000);
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello 2");
    }, 3000);
  });
  console.log("1");
  let w = await p1;
  console.log("data " + w);
  let y = await p2;
  console.log("Data2" + y);
  console.log("3");
  return [w, y];
};

func();
