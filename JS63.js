let f1 = async () => {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(5);
    }, 3000);
  });
  try {
    let l = await p1;
  } catch (e) {
    console.error(e);
  }
};

f1();
