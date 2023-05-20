// let func = () => {
//   mess = "global";
//   console.log(mess);
//   let kill = () => {
//     console.log(mess + " kill");
//   };
//   return kill;
// };
let func = () => {
  mess = "global";
  console.log(mess);
  let kill = () => {
    console.log(mess + " kill");
  };
  mess = "big";
  return kill;
};

let c = func();
c();
