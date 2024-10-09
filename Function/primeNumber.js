const PrimeNumber = (n) => {
  if (n === 1) {
    return true;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(PrimeNumber(2));
