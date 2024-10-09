const AlphabeticalOrder = (str) => {
  return str.split("").sort().join("");
};
console.log(AlphabeticalOrder("farok"));
