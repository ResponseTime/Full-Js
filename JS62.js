try {
  let n = 1;
  console.log(n);
} catch (error) {
  console.log(error.name);
} finally {
  console.log("Finally block");
}
