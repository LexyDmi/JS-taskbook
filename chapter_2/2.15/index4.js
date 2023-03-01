function pow(x, n) {
    return x ** n;
}

const prompt = require("prompt-sync")({ sigint: true });
let x = prompt("Введите натуральное число x: ");
let n = prompt("Введите степень числа n: ");

if (n < 1)
    console.log("n может быть только натуральным числом, попробуйте другое значение");
else 
    console.log(pow(x, n));


