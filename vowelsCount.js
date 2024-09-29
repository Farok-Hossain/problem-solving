const getVowels = (stng) => {
  let vowels = "aAeEiIoOuU";
  let vowelsCount = 0;
  for (let i = 0; i < stng.length; i++) {
    if (vowels.indexOf(stng[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};

console.log(getVowels("Farok hossain"));

const countVowel = (str) => {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let letter of str) {
    if (vowel.includes(letter)) {
      count++;
    }
  }
  return count;
};

console.log(countVowel("I love programming"));
