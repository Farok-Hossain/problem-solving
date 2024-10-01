const addTwoDigit = (n) => {
  return (n % 10) + Math.floor(n / 10);
};

console.log(addTwoDigit(34));
console.log(addTwoDigit(78));
