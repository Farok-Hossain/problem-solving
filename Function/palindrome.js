const Palindrome = (stng) => {
  let p1 = stng.split("");
  let r1 = p1.reverse();
  let r2 = r1.join("");
  if (stng.toUpperCase() == r2.toUpperCase()) {
    return "is a Palindrome";
  } else {
    return "is not a Palindrome";
  }
};

console.log("Madam", Palindrome("Madam"));
console.log("run", Palindrome("run"));

const PalindromeNumber = (num) => {
  let rem = 0;
  let reverseNum = 0;
  while (num > 0) {
    rem = num % 10;
    reverseNum = reverseNum * 10 + rem;
    num = Math.floor(num / 10);
  }
  console.log(num);
};

PalindromeNumber(1234321);

let n1 = 12321;
let r = 0;
let reN = 0;
while (n1 > 0) {
  r = n1 % 10;
  reN = reN * 10 + r;
  n1 = Math.floor(n1 / 10);
}
console.log(reN);
