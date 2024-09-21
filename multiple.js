const number = (posN) => {
  if (posN % 3 == 0 || posN % 7 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(number(10));
console.log(number(14));
console.log(number(15));
console.log(number(21));
console.log(number(24));
console.log(number(29));
