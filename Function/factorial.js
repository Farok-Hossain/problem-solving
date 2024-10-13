const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(7));

// another way
const factorial2 = (n) => {
  let fact = 1;
  if (n === 0) {
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log("factorial 10 is: ", factorial2(10));

// print the function name
function ab() {
  return arguments.callee.name;
}
console.log(ab());
