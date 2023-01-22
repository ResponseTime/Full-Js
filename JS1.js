const add = (...a) => {
  let sum = 0;
  for (let i of a) {
    sum += i;
  }
  return sum;
};
console.log("hello world");
console.log(add(23, 45, 56, 76));
