// convert string length to byte

const string_byte = (str) => {
  return new Blob([str]).size;
};

console.log(string_byte("md. farok hossain"));
