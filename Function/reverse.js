const reverseFunction = (n) => {
  n = n + "";
  return n.split("").reverse().join("");
};
console.log(reverseFunction(1234));

const f = "farok Hossain";
console.log(f.split("").reverse().join(""));