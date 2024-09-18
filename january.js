for (let year = 2000; year <= 2090; year++) {
  let d = new Date(year, 0, 1);

  if (d.getDay() === 0) {
    console.log("1st January Sunday will be ", year);
  }
}
