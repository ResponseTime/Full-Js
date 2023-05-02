class myClass {
  constructor() {
    console.log("constructor");
  }
  hell() {
    console.log(this.n + " hell");
  }
  printName(name) {
    this.n = name;
  }
}

let m = new myClass();
m.printName("ab");
m.hell();
