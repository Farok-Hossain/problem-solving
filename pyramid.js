let n = 5;
let pattern = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    pattern += " ";
  }
  for (j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);
