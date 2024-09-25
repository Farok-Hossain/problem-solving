const valueCheck = (y, z) => {
  if ((y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    return true;
  } else {
    return false;
  }
};

console.log(valueCheck(29, 55));
console.log(valueCheck(66, 87));
console.log(valueCheck(88, 49));

const largest = (r, s, t) => {
  if (r > s && r > t) {
    return "r is bigger";
  } else if (s > r && s > t) {
    return "s is bigger";
  } else if (r == s && r == t && s == t) {
    return "everyone are equall";
  } else {
    return "t is bigger";
  }
};

console.log(largest(55, 77, 7));
console.log(largest(3, 66, 77));
console.log(largest(69, 55, 77));
console.log(largest(55, 88, 77));
console.log(largest(45, 45, 45));

const lastDigit = (f, g, h) => {
  if (f > 0 && g > 0 && h > 0) {
    return f % 10 === g % 10 && f % 10 === h % 10 && g % 10 === h % 10;
  } else {
    return false;
  }
};
console.log(lastDigit(12, 34, 55));
console.log(lastDigit(10, 50, 90));
console.log(lastDigit(88, 30, 50));
console.log(lastDigit(20, 33, 53));
console.log(lastDigit(-20, 30, 50));
