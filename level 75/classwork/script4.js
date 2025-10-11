function outerFunction() {
  let message = "hello world";

  function innerFunction() {
    console.log(message);
  }

  innerFunction();
}

outerFunction();
