class myClass {
  constructor() {
    console.log("default constructor");
  }
}

class myClass2 {
  constructor(a, b) {
    console.log(a, b);
  }
}

let k = new myClass();
let o = new myClass2("hello", "world");
