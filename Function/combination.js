// write a js function that generates all combination of a string

const CombinatinOfString = (str) => {
  let list_of_strings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      list_of_strings.push(str.slice(i, j));
    }
  }
  return list_of_strings;
};

console.log(CombinatinOfString("dog"));
