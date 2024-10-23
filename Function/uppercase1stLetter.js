const Uppercase = (str) => {
  let arr1 = str.split(" ");
  let newArr1 = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr1.push(arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1));
  }
  return newArr1.join(" ");
};
console.log(Uppercase("the quick brown fox"));
console.log(Uppercase("front end web development!"));
