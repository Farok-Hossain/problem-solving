for (let i = 1; i <= 4; i++) {
  console.log(i);
}

for (var j = 1; ; j++) {
  if (j <= 5) {
    console.log(j);
  } else {
    break;
  }
}
console.log(j);

// for in -> it is used in object

const myObj = {
  name: "JavaScript",
  estd: "1995",
  founder: "Brendon Eich",
};
for (property in myObj) {
  console.log(property);
}

// for of

const myArray = [1, 2, 3, 4, 5];
for (element of myArray) {
  console.log(element);
}

const myString = "I Love JavaScript!!";
for (ele of myString) {
  console.log(ele);
}

const cars = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < cars.length; i++) {
  console.log(i);
}

// console.log(cars.length);
for (pro of cars) {
  console.log("Car name:", pro);
}

for (proo in cars) {
  console.log(proo);
}

const name2 = "farok";
for (let j = 0; j < name2.length; j++) {
  console.log(j);
}

console.log(name2.indexOf("r"));
