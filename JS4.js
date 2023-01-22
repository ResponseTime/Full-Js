let a = 23;
let b = null;
let c = undefined;
let d = "hello";
let e = true;

console.log(a, b, c, d, e);

const obj = {
  name: "hello",
  age: 23,
  isMarried: false,
  arr: [1, 2, 3, 4, 5],
};

for (const key in obj) {
  console.log(key, obj[key]);
}
