let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

let ar = [1, 2, 3, 10, 20, 30];
let newar = ar.filter((item) => {
  return item % 10 == 0;
});
console.log(newar);

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a = a.map((item) => {
  return item ** 2;
});
console.log(a);

let n = 5;
let a1 = Array(n)
  .fill(0)
  .map((item, index) => {
    return ++index;
  });
let a2 = a1.reduce((i1, i2) => {
  return i1 * i2;
});
console.log(a2);
