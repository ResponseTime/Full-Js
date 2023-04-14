const fetch = require("node-fetch");
let p = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then((res) => {
  return res.json();
}).then((data) => console.log(data));
