const person = {
  name: "გიორგი",
  surname: "სხირტლაძე",
  academy: "GOA",
  num: 12,
  favColor: "მწვანე",
  isGoaStudent: true,
  greet: function () {
    console.log("hello");
  }
};

console.log(person);
console.log(person.favColor);
person.greet();
