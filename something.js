const something = async (a, b, c) => {
  const sum = a + b + c;
  await console.log(sum);
};

something(10, 22, 34);
