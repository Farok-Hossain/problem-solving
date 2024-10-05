const fruits = ["Mango", "Banana", "Orange", "Apple", "Papaya"];
console.log(fruits.at(2));
console.log(fruits.sort());
console.log(fruits.reverse());

const points = [40, 67, 2, 5, 54, 29, 34, 6];
console.log(points.sort((a, b) => a - b));

console.log(points.sort((a, b) => b - a));
