const equalLastDigit = (m, n, o) => {
  return m % 10 == n % 10 || n % 10 == o % 10 || o % 10 == m % 10;
};

console.log(equalLastDigit(2, 4, 23));
console.log(equalLastDigit(22, 42, 52));
console.log(equalLastDigit(23, 45, 95));

const greaterLess = (p, q, r) => {
  return (
    (p >= 20 && (p < q || p < r)) ||
    (q >= 20 && (q < p || q < r)) ||
    (r >= 20 && (r < p || r < q))
  );
};

console.log(greaterLess(10, 12, 15));
console.log(greaterLess(22, 23, 77));
console.log(greaterLess(55, 45, 43));

const sumDifference = (x, y) => {
  return x == 15 || y == 15 || x + y == 15 || x - y == 15;
};

console.log("sumDiff");
console.log(sumDifference(13, 15));
console.log(sumDifference(18, 3));
