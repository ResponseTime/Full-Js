let arr = [32, 65.4, "Hello", true];
console.log(arr.length);
console.log(arr);
arr[0] = 100;
console.log(arr);
console.log(arr.join("-"));
console.log(arr.toString());

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
