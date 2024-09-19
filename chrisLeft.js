let d = new Date();
let cmas = new Date(d.getFullYear(), 11, 25);

if (d.getMonth() == 11 && d.getDate() == 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
let one_day = 1000 * 60 * 60 * 24;
let time = d.getTime();
let time2 = cmas.getTime();
console.log("Present time:", time, "Chrismas time:", time2);

console.log(
  Math.ceil((cmas.getTime() - d.getTime()) / one_day),
  "days left until chris"
);
