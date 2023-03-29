// try {
//   name;
// } catch (e) {
//   console.log(e.name);
//   console.log(e.message);
//   console.log(e.stack);
// }
try {
  let age = 17;
  if (age < 18) {
    throw new Error("You are too young");
  }
} catch (e) {
  console.log(e.name);
  console.log(e.message);
  //   console.log(e.stack);
}
