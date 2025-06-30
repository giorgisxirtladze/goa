let person = {
  name: {
    firstName: "Giorgi",
    lastName: "Sxirtladze",
    middleName: "Nika"
  },
  age: {
    birthYear: 2013,
    currentAge: 12,
    schoolGrade: 7
  }
};

person.name.firstName = "Saba";

person.name.nickname = "Gio";

console.log(person);
