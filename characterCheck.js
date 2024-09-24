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
