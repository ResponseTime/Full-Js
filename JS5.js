let a = "global";
let b = 2;
console.log(a + b);
console.log(typeof b);
console.log(typeof a);

const obj = {
  name: "hello",
  age: 23,
};

console.log(obj);

obj["newKey"] = "new value";

console.log(obj);

const dict = {
  theocracy: "government by religious leaders",
  patriarchy:
    "a system of society or government in which the father or eldest male is head of the family and descent is reckoned through the male line.",
  oligarchy:
    "a small group of people having control of a country, organization, or institution.",
  democracy:
    "a system of government by the whole population or all the eligible members of a state, typically through elected representatives.",
  monarchy:
    "a form of government in which a single person, the monarch, rules.",
};

console.log(dict["theocracy"]);
console.log(dict["democracy"]);
