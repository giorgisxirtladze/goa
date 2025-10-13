function runParseIntTests() {
  const out = document.getElementById("output");
  let result = "";

  const val1 = parseInt("25.9");
  result += `"25.9" parsed: ${val1}\n`;

  const val2 = parseInt("100abc");
  result += `"100abc" parsed: ${val2}\n`;

  const val3 = parseInt("abc100");
  result += `"abc100" parsed: ${val3}\n`;

  const total = parseInt("10") + parseInt("20") + parseInt("30");
  result += `Sum of "10", "20", "30": ${total}`;

  out.textContent = result;
}