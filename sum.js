const a = 10;
const b = 10;

let sum = a + b;
if (a == b) {
  sum = sum * 3;
}

console.log(sum);

const tripe = (c) => {
  if (c <= 19) {
    return 19 - c;
  } else {
    return (c - 19) * 3;
  }
};

console.log(tripe(12));
console.log(tripe(22));
