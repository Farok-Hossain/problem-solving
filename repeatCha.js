const x = 1132323222;
const y = 123;
let res = x / y;
console.log(res);
let format = res.toLocaleString(undefined, { maximumFractionDigits: 2 });
console.log(format);

const stringCopies = (s, n) => {
  if (n <= 0) {
    return false;
  }

  s = s.repeat(n);
  return s;
};
console.log(stringCopies("farok", 4));
console.log(stringCopies("farok", 0));
console.log(stringCopies("farok", -4));

const stringRepeat = (ss) => {
  if (ss.length <= 2) {
    return false;
  }
  const ln = ss.length;
  const b = ln - 3;
  let ss2 = ss.slice(b, ln);
  return ss2.repeat(4);
};

console.log(stringRepeat("programming"));
console.log(stringRepeat("Farok_Afs"));
console.log(stringRepeat("abc"));
console.log(stringRepeat("ab"));

const st = "abcde";
const ress = st.substring(st.length - 3);
console.log(ress.repeat(4));
