const prompt = require("prompt-sync")({ sigint: true });
let age = prompt("Введите значение: ");

//1-й вариант
if (!(age >= 14 && age <= 90))
    console.log(age, " не входит в диапазон")
else
    console.log(age, " входит в диапазон")


    
//2-й вариант
if (age < 14 || age > 90)
    console.log(age, " не входит в диапазон")
else
    console.log(age, " входит в диапазон")
