function generateFibonacci(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}

console.log(generateFibonacci(7));

// generate another way
const FibonacciSeries = (num) => {
  let num1 = 0;
  let num2 = 1;
  let sum;
  if (num === 1) {
    return num1;
  } else if (num === 2) {
    return num2;
  } else {
    for (let i = 3; i <= num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
};

console.log("Fibonacci of 3:", FibonacciSeries(2));
console.log("Fibonacci of 5:", FibonacciSeries(7));
console.log("Fibonacci of 8:", FibonacciSeries(18));
