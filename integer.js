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
