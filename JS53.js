// const fs = require("fs");

// fs.readFile("JS1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error");
//   }
//   console.log(data);
//   fs.readFile("JS2.txt", "utf8", (err, data) => {
//     if (err) {
//       console.error("Error");
//     }
//     console.log(data);
//     fs.readFile("JS3.txt", "utf8", (err, data) => {
//       if (err) {
//         console.error("Error");
//       }
//       console.log(data);
//     });
//   });
// });

// let func = async () => {
//   new Promise((resolve, reject) => {
//     fs.writeFile("JS2.txt", "utf8", (err, data) => {
//       if (err) {
//         return reject(err);
//       } else {
//         return resolve(data);
//       }
//     });
//   });
// };

// func()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
