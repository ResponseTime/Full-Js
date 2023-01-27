let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let ar2 = arr.map((item) => {
  return item ** 2;
});

console.log(ar2);

let a = arr.filter((item) => {
  return item % 2 == 0;
});
console.log(a);

let b = arr.reduce((i1, i2) => {
  return i1 + i2;
});
console.log(b);
