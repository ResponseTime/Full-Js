class a {
  constructor() {
    console.log("constructor of class a");
  }
}

class b extends a {
  constructor() {
    super();
    console.log("constructor of class b");
  }
}

let j = new a();
let k = new b();
