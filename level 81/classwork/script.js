const languages = ["python", "javaScript", "c++", "typeScript", "go", "ruby"];

const index = languages.findIndex(lang => lang.length > 8);

console.log(index);
console.log(languages[index]);