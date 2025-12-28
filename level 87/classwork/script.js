class Student {
  constructor(name, surname, age, academy, group, favColor, favLanguage) {
    this.name = name
    this.surname = surname
    this.age = age
    this.academy = academy
    this.group = group
    this.favColor = favColor
    this.favLanguage = favLanguage
  }

  logName() {
    console.log(this.name + " " + this.surname)
  }
}

const student1 = new Student("Giorgi", "Skhirtladze", 12, "goa", "Group 29", "Greeeeeeeeeeeeeen", "HTML")
student1.logName()
