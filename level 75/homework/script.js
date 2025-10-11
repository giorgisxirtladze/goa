function greet() {
  let message = "Hello, Giorgi!";
  console.log(message);
}
greet();

function outer() {
  let count = 0;
  function inner() {
    count += 1;
    console.log("Inside inner:", count);
  }
  console.log("Before inner:", count);
  inner();
  console.log("After inner:", count);
}
outer();

function testScope() {
  if (true) {
    var x = "var scoped";
    let y = "let scoped";
    const z = "const scoped";
  }
  console.log(x);
}
testScope();
