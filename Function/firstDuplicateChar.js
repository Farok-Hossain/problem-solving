function firstDuplicateChar(str) {
  const charCount = [];
  for (let i = 0; i < str.length; i++) {
    const charr = str[i];
    // console.log(charr);
    charCount[charr] = charCount[charr] + 1 || 1;
  }

  for (i = 0; i < str.length; i++) {
    const charr = str[i];
    if (charCount[charr] === 2) {
      return i;
    }
  }
  return -1;
}

console.log(firstDuplicateChar("farok_hossain"));
