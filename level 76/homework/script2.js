function runParseFloatTests() {
  const out = document.getElementById("output");
  const userInput = document.getElementById("userinput").value;
  let result = "";

  const userNumber = parseFloat(userInput);
  result += "User input parsed: ${userNumber}\n"

  const pi = parseFloat("3.14");
  result += `"3.14" parsed: ${pi}\n`;

  const mixed1 = parseFloat("42abc");
  result += `"42abc" parsed: ${mixed1}\n`;

  const mixed2 = parseFloat("abc42");
  result += `"abc42" parsed: ${mixed2}\n`;

  const sum = parseFloat("10.5") + parseFloat("20.2") + parseFloat("30.8");
  result += `Sum of "10.5", "20.2", "30.8": ${sum}`;

  out.textContent = result;
}