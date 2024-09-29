// first character of every word convert to uppercase
const capitalLetter = (str) => {
  str = str.split(" ");

  //   console.log(str);
  //   console.log(str.length);
  //   console.log(str[1]);

  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
};

console.log(capitalLetter("russia is fighting ukraine"));
console.log(capitalLetter("I am a professional software enginner"));

// const preState = "I am coding write now";
// let ch = preState.split(" ");
// for (let i = 0, x = ch.length; i < x; i++) {}

// let v = "farok";
// v = v.substr(3);
// console.log(v);

// let text = "Hello world!";
// let result = text.substr(3, 2);
// console.log(result);
