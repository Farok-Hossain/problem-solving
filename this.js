function myName() {
  this.name = "farok Hossain";
}

myName();

console.log(name);

const myObject = {
  name: "Farok Hossain",
  age: 28,
  msg: function () {
    console.log(this);
  },
};

myObject.msg();

const myCustomObj = {
  name: "Farok Hossain",
  age: 29,
  role: "Software Developer",
  anotherObject: {
    name: "Hossain Farok",
    age: 27,
    mg: function () {
      console.log("my name is: " + this.name + ", my age: " + this.age);
    },
  },
};

myCustomObj.anotherObject.mg();

const myObj = {
  name: "Farok",
  age: 28,
  role: "Programmer",
  anotherFn: function () {
    console.log(this);
  },
};

myObj.anotherFn();

const cusObj = {
  name: "Md. Farok Hoosain",
  role: "Web Developer",
  anotherObj: {
    age: 27,
    anthFun: function () {
      console.log(this);
    },
  },
};

cusObj.anotherObj.anthFun.call(cusObj);
