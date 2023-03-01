const prompt = require("prompt-sync")({ sigint: true });
let age = prompt("Введите значение: ");
if (age >= 14 && age <= 90)
    console.log(age, " находится в диапазоне между 14 и 90!")
else
    console.log(age, " не входит в диапазон")