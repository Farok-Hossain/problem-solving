const equalLastDigit = (m, n, o) => {
  return m % 10 == n % 10 || n % 10 == o % 10 || o % 10 == m % 10;
};

console.log(equalLastDigit(2, 4, 23));
console.log(equalLastDigit(22, 42, 52));
console.log(equalLastDigit(23, 45, 95));
