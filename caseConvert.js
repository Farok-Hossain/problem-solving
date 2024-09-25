const lowerToUpper = (str) => {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  let front_part = str.substring(0, 3).toLowerCase();
  let back_part = str.substring(3, str.length);
  return front_part + back_part;
};

console.log(lowerToUpper("js"));
console.log(lowerToUpper("JaVaScript"));
console.log(lowerToUpper("Farok Hossain"));
