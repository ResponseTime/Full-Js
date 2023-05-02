let a = {
  name: "a",
  age: 23,
};

let p = {
  lang: "en",
};

a.__proto__ = p;
console.log(a.lang);
