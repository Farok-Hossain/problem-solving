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

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
console.log(text.indexOf("B"));

let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);
console.log(y);

let v = 12345;
console.log(v.toString());
console.log((1234 + 12).toString());
