let age = 32;

if (age >= 10 && age <= 20) {
  console.log("You are bw");
}

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Today is not a day");
}

let a = 9;

if (a % 2 == 0 && a % 3 == 0) {
  console.log("a is divisible by 2 and 3");
} else if (a % 2 == 0 || a % 3 == 0) {
  console.log("a is divisible by 2 or 3");
}

a = 34;
console.log("you can", a > 18 ? "vote" : "not vote");
