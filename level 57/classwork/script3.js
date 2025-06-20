const myObj = {
    name: "Giorgi",
    age: 12,
    city: "Tbilisi",

    printName: function() {
        console.log("Name:", this.name);
    },

    printAge: function() {
        console.log("Age:", this.age);
    },

    printCity: function() {
        console.log("City:", this.city);
    }
};

myObj.printName();
myObj.printAge();
myObj.printCity();
