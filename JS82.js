class demo {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
  get nam() {
    return this.name;
  }
  set nam(n) {
    this.name = n;
  }
}

let k = new demo("a", 32);
k.nam = "Ds";
console.log(k.nam);
console.log(k instanceof demo);
