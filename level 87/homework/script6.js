class Phone {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
  checkPrice() {
    if (this.price > 1000) {
      console.log(`${this.model} is expensive.`);
    } else {
      console.log(`${this.model} is cheap.`);
    }
  }
}

const phone1 = new Phone("iPhone 15 Pro", 1200);
const phone2 = new Phone("Samsung Galaxy A14", 250);
phone1.checkPrice();
phone2.checkPrice();
