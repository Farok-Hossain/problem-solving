// when all sides a known

let s1 = 5;
let s2 = 6;
let s3 = 7;

let s = (s1 + s2 + s3) / 2;
const triangle = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
console.log(triangle);
