function demo() {
  console.log("Hello World");
}

let hello = () => {
  console.log("Hello World");
};

demo();
hello();

function add(...a) {
  let sum = 0;
  for (let val of a) {
    sum += val;
  }
  return sum;
}

let sum = add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);
