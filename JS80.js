class myclass {
  constructor() {
    console.log("constructor 1");
  }
}
class mclass extends myclass {
  constructor() {
    super();
    console.log("constructor 2");
  }
}

let k = new mclass();
