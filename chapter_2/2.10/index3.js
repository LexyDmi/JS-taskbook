const prompt = require("prompt-sync")({ sigint: true });
let num = prompt("Введите число: ");
if (num > 0)
    console.log(1);
else if (num < 0)
    console.log(-1)
else if (num == 0)
    console.log(0);
else
    console.log("Введено неверное значение!");