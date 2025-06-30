const cityPopulation = {
  "თბილისი": 1200000,
  "ბათუმი": 160000,
  "ქუთაისი": 140000,
  "რუსთავი": 130000
};

function comparePeople() {
   const age1 = parseInt(document.getElementById("age1").value);
  const city1 = document.getElementById("city1").value.trim().toLowerCase();
  const age2 = parseInt(document.getElementById("age2").value);
  const city2 = document.getElementById("city2").value.trim().toLowerCase();

  const person1 = {
    age: age1,
    city: city1
  };

  const person2 = {
    age: age2,
    city: city2
  };

  let result = "";

  if (age1 > age2) {
    result += "უფრო დიდი ასაკი აქვს: person1\n";
  } else if (age2 > age1) {
    result += "უფრო დიდი ასაკი აქვს: person2\n";
  } else {
    result += "ორივე ასაკი ტოლია\n";
  }

  const pop1 = cityPopulation[city1] || 0;
  const pop2 = cityPopulation[city2] || 0;

  if (pop1 > pop2) {
    result += "უფრო მჭიდროდ დასახლებული ქალაქია: " + city1 + " (person1)\n";
  } else if (pop2 > pop1) {
    result += "უფრო მჭიდროდ დასახლებული ქალაქია: " + city2 + " (person2)\n";
  } else {
    result += "ორივე ქალაქს ერთნაირი მოსახლეობა აქვს ან არ მოიძებნა\n";
  }

  if (age1 < age2) {
    delete person1.age;
    result += "person1-დან წაშლილია ასაკი (პატარაა)\n";
  } else if (age2 < age1) {
    delete person2.age;
    result += "person2-დან წაშლილია ასაკი (პატარაა)\n";
  }

  if (pop1 < pop2) {
    delete person1.city;
    result += "person1-დან წაშლილია ქალაქი (მცირე მოსახლეობა)\n";
  } else if (pop2 < pop1) {
    delete person2.city;
    result += "person2-დან წაშლილია ქალაქი (მცირე მოსახლეობა)\n";
  }

  result += "\nperson1: " + JSON.stringify(person1, null, 2);
  result += "\nperson2: " + JSON.stringify(person2, null, 2);

  document.getElementById("output").textContent = result;
}
