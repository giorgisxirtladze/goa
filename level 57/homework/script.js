let person = {
  name: "Giorgi",
  age: 12,
  city: "Tbilisi"
};

console.log("Name:", person.name);

person.country = "Georgia";
console.log("Country added:", person.country);

let user = {
  username: "giorgi12",
  profile: {
    name: "Giorgi",
    age: 12,
    city: "Tbilisi"
  }
};
console.log("Nested Object:", user);

person.age = 12;
console.log("Updated Age:", person.age);
