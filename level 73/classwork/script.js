let mystring = "";
let name = "giorgi skhirtladze";

do {
  mystring += name;
} while (myString.length < 20);

document.getElementById("output").textContent = myString;