class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  showBrand() {
    console.log(`The car brand is ${this.brand}.`);
  }
}

const car1 = new Car("Toyota", 2015);
const car2 = new Car("BMW", 2020);
car1.showBrand();
car2.showBrand();
