// numeric value to convert hours and minutes
const timeConvert = (N) => {
  const hours = Math.floor(N / 60);
  const minutes = N % 60;
  return hours + ":" + minutes;
};

console.log(timeConvert(70));
console.log(timeConvert(50));
console.log(timeConvert(107));
console.log(timeConvert(1441));
