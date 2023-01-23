let str1 = "Hello world";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.charAt(6));
console.log(str1.indexOf("l"));
console.log(str1.lastIndexOf("l"));
console.log(str1.startsWith("Hello"));
console.log(str1.endsWith("world"));
console.log(str1.includes("Hello"));
console.log(str1.split(" "));
console.log(str1.replace("Hello", "Hi"));
console.log(str1.substring(0, 5));
console.log(str1.slice(-5, -1));
console.log(str1.slice(0, 11, 3));
console.log(str1.length);

for (let i of "Hello World") {
  console.log(i);
}
