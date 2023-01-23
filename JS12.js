const obj = {
  john: 32,
  harry: 45,
  bob: 67,
};

for (let key in obj) {
  console.log(key, obj[key]);
}

for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(Object.keys(obj)[i], obj[Object.keys(obj)[i]]);
}

let mean = (...a) => {
  let sum = 0;
  for (let val of a) {
    sum += val;
  }
  return sum / a.length;
};

console.log(mean(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
