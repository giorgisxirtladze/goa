class Animal {
  constructor(type) {
    this.type = type;
  }
  showType() {
    console.log(`This is a ${this.type}.`);
  }
}

const animal1 = new Animal("Cockatiel");
animal1.showType();
