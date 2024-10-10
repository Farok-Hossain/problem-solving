const LongestString = (stg) => {
  let st1 = stg.split(" ");
  return st1.sort(function (a, b) {
    return b.length - a.length;
  })[0];
};

console.log(LongestString("FrontEnd web Developer"));
console.log(
  LongestString("I am farok hossain, I am a professional software enginner")
);
