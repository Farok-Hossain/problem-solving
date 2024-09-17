let today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();
console.log(currentDate, "-", currentMonth, "-", currentYear);
let day = today.getDay();

let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : ", dayList[day]);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let AmOrPm = hour >= 12 ? "PM" : "AM";

hour = hour >= 12 ? hour - 12 : hour;

if (hour === 12 && AmOrPm === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    AmOrPm = "Noon";
  } else {
    (hour = 12), (AmOrPm = "PM");
  }
}

if (hour === 12 && AmOrPm === "AM") {
  if (minute === 0 && second === 0) {
    (hour = 12), (AmOrPm = "Midnight");
  } else {
    (hour = 12), (AmOrPm = "AM");
  }
}

console.log("Current time is :", hour, AmOrPm, ":", minute, ":", second);
