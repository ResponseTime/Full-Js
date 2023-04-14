const fetch = require("node-fetch");

const get = async () => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "Gello",
      body: "my thumb",
      userId: 133,
    }),
  };

  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let res = await p.json();
  return res;
};

let mainF = async () => {
  let q = await get();
  console.log(q);
};

mainF();
