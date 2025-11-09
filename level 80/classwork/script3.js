const myArray = [
  "Hello",
  42,
  true,
  [1, 2, 3],
  { name: "Giorgi" },
  function() { return "me are function"; }
];

myArray.forEach((element, index) => {
  console.log(index, element);
});