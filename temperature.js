// const c = 60;
// const f = (9 * c + 160) / 5;
// console.log("Temperature in Fahrenheit: ", f);

// const F = 45;
// const C = ((F - 32) * 5) / 9;
// console.log("Temparature in Celsius:", C);

const temperatureInC = (F) => {
  console.log("Temperature in Celsius:", ((F - 32) * 5) / 9);
};

const temperatureInF = (C) => {
  console.log("Temperature in Fahrenheit:", (9 * C + 160) / 5);
};

temperatureInC(45);
temperatureInF(60);
