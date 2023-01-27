let m = Math;
let num = m.floor(m.random() * 11);
let userNum = 0;
while (userNum != num) {
  num = m.floor(m.random() * 11);
  if (userNum == num) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}
