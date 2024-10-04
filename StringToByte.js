// convert string length to byte

const string_byte = (str) => {
  console.log(str.length);
  return new Blob([str]).size;
};

console.log(string_byte("md. farok hossain"));
console.log(string_byte("Ã¢"));

const filter_non_unique = (arr) => {
  console.log(arr.filter((i) => arr.lastIndexOf(i)));
  return arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
};

console.log(filter_non_unique([1, 3, 4, 4, 5, 6, 7, 8, 8, 9]));

const inde = ["f", "s", "a", "n"];
console.log(inde.indexOf("n"));
console.log(inde.lastIndexOf("n"));

let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf(",");
let result2 = text.indexOf("o");
console.log(result);
console.log(result2);

const ages = [32, 33, 16, 40];

const result3 = ages.filter((b) => console.log(b));
