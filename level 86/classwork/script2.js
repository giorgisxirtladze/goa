const person = {
  name: "giorgi",
  surname: "skhirtladze",
  academy: "Goa",
  favColor: "green",
  favNumber: 7
};

const keysToCheck = ["name", "myName", "mySurname", "worstColor", "favColor", "favnumber", "favNumber"];

keysToCheck.forEach(key => {
  console.log(`${key}: ${person.hasOwnProperty(key)}`);
});
