const remove = (cha) => {
  return cha.slice(0, -1);
  // console.log(cha.slice(0, -1));
};
const modifiedValue = remove("Farok Hossain");
console.log(modifiedValue);

const str = "Farok Hossain";
const p = str.substring(0, 0);
console.log(p);

const g = "Python";
console.log(g.length);

const remove1stLastCha = (cha) => {
  return cha.substring(1, cha.length - 1);
};

console.log(remove1stLastCha("javascript"));
console.log(remove1stLastCha("js"));
console.log(remove1stLastCha("php"));

const concatenate = (s1, s2) => {
  s1 = s1.substring(1);
  s2 = s2.substring(1);
  return s1 + s2;
};

console.log(concatenate("farok", "hossain"));
console.log(concatenate("python", "js"));

// last 3 characters move to first
const chaMove = (str) => {
  if (str.length >= 3) {
    return str.slice(-3) + str.slice(0, -3);
  }
};

console.log(chaMove("farokafs"));

const t = "farok";
console.log(t.substring(0, 3));

const sameElements = (int) => {
  const lastEle = int.length - 1;
  return int[0] == int[lastEle];
};

console.log(sameElements([12, 15, 29, 34]));
console.log(sameElements([10, 15, 29, 30]));
console.log(sameElements([20, 15, 29, 30]));
console.log(sameElements([2, 2]));
