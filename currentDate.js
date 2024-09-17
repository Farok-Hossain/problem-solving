let fullDate = new Date();
let day = fullDate.getDate();
let month = fullDate.getMonth() + 1;
const year = fullDate.getFullYear();
if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}
console.log(day, month, year);
