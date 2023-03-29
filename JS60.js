let i = 23;
let o = 0;
try {
  let div = i / o;
  console.log(div);
} catch (e) {
  console.log(e);
}

// try only handles sync code not async
