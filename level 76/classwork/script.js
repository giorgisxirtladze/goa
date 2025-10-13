const generateResult = (strArr) => {
    let result = "";
    for (let str of strArr){
        result += str;
    }
    return eval(result)
}
console.log(generateResult(["1", "+", "1000", "-", "101"]))