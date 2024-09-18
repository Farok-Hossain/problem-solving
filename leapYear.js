const LeapYear = (year) => {
  if (year % 100 == 0) {
    console.log("not leap  year");
  } else if (year % 4 == 0) {
    console.log("It is Leap Year");
  } else if (year % 400 == 0) {
    console.log("It is Leap Year");
  } else {
    console.log("It is not leap year");
  }
};

const result = LeapYear(2003);
