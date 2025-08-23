const heading = document.getElementById("myHeading");
let counter = 0;

heading.addEventListener("mouseout", function() {
  counter += 1;
  console.log(counter);
});
