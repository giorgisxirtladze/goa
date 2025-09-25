const myObj = {
    name: "giorgi",
    surname: "skhirtladze",
    age: 15,
    academy: "GOA",
    favColor: "blue"
};

for (let key in myObj){
    if (typeof myObj[key] === "string"){
        if (myObj[key].length < 4){
            myObj[key] = myObj[key] + myObj[key]
        } else {
            console.log(myObj[key])
        }
    } else {
        myObj[key] = myObj[key]**2
    }
}

console.log(myObj)
