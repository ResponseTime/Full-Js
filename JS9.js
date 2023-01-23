for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in obj) {
  console.log(key, obj[key]);
}
let arr = [32, 45, "John", true];
for (let val of arr) {
  console.log(val);
}
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}

let ar = [32, 45, "John", true];

ar.forEach((val, index) => {
  console.log(index, val);
});
