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

const removeCharac = (cha) => {
  return cha.substring(1, cha.length - 1);
};

console.log(removeCharac("javascript"));
console.log(removeCharac("js"));
console.log(removeCharac("php"));
