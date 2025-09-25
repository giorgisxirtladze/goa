const student = {
    name: "giorgi skhirtladze",
    age: 13,
    grade: "A+"
}

for (const key in student){
    console.log(key);
    console.log(student[key])
}