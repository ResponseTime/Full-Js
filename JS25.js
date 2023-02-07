console.log(console);
console.error("Error");
console.assert(1 == 2);
const obj = {
  name: "John",
  age: 30,
};

console.table(obj);
console.warn("Warning");
console.info("Info");

console.time("Time");
for (let i of Array(1000000)
  .fill(0)
  .map((item, index) => {
    index++;
  })) {
  console.log(i);
}
console.timeEnd("Time");
