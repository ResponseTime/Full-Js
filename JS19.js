let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i of arr) {
  console.log(i);
}

arr.forEach((item, index) => {
  console.log(item, index);
});

let ar = Array.from("Hello");

ar.forEach((item, index) => {
  console.log(item, index);
});

for (let k in arr) {
  console.log(k, arr[k]);
}
