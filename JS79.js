class a {
  run() {
    console.log("A is running");
  }
}
class b extends a {
  run() {
    console.log("B is running");
  }
}

let ae = new a();
let be = new b();

ae.run();
be.run();
