const fruits = ["Mango", "Banana", "Orange", "Apple", "Papaya"];
console.log(fruits.at(2));
console.log(fruits[2]);
console.log(fruits.join(" + "));
console.log(fruits.toString());
console.log(fruits.sort());
console.log(fruits.reverse());
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push("Lemon"));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("guava"));
console.log(fruits);

const points = [40, 67, 2, 5, 54, 29, 34, 6];
console.log(points.sort((a, b) => a - b));

console.log(points.sort((a, b) => b - a));
