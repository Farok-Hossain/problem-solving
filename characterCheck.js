const startsWith = (str) => {
  if (str.length < 4) {
    return false;
  }

  front = str.substring(0, 4);
  if (front == "Java") {
    return true;
  } else {
    return false;
  }
};

console.log(startsWith("JavaScript"));
console.log(startsWith("Python"));
console.log(startsWith("Java"));
console.log(startsWith("java"));
console.log(startsWith("React"));

const EndsWith = (str2) => {
  let re = str2.slice(-6);
  if (re == "Script") {
    return true;
  } else {
    return false;
  }
};

console.log(EndsWith("Javascript"));
console.log(EndsWith("JavaScript"));
console.log(EndsWith("Python"));
console.log(EndsWith("React"));

let text = "Front end web developer";
let result = text.includes("web");
console.log("textCheck:", result);

const str3 = "I love watching football";
const substr = "watching";
console.log("char:", str3.includes(substr));
