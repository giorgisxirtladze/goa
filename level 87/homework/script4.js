class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  showGrade() {
    console.log(`${this.name}'s grade is ${this.grade}.`);
  }
}

const student1 = new Student("Ana", "A");
const student2 = new Student("Nika", "B");
const student3 = new Student("Luka", "C");
student1.showGrade();
student2.showGrade();
student3.showGrade();
