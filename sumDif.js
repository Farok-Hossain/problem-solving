const sumDiff = (s, t) => {
  return s === 15 || t === 15 || s + t === 15 || s - t === 15;
};

console.log(sumDiff(15, 12));
console.log(sumDiff(13, 5));
console.log(sumDiff(24, 9));
