const LeapYear = (year) => {
  if (year % 100 == 0) {
  } else if (year % 4 == 0 && year % 400 == 0) {
    console.log("It is Leap Year");
  } else {
    console.log("It is not Leap Year");
  }
};

const result = LeapYear(2004);
