const person1 = {
  name: "ლაშა",
  age: 20,
  city: "თბილისი"
};

const person2 = {
  name: "მარიამი",
  age: 19,
  city: "თბილისი"
};

function checkPeople() {
  const result = document.getElementById("result");

  if (person1.age > 18 && person2.age > 18 &&
      person1.city.toLowerCase() === "თბილისი" &&
      person2.city.toLowerCase() === "თბილისი") {
    result.textContent = "You can vote in Tbilisi";
  } else {
    result.textContent = "Voting in Tbilisi is not allowed for one or both people.";
  }
}
