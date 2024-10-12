function firstUniqChar(s) {
  const characterCount = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // console.log(char);
    characterCount[char] = characterCount[char] + 1 || 1;
    // console.log(characterCount[char]);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // console.log(char);
    if (characterCount[char] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqChar("farok_afskk"));
