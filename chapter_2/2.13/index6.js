const prompt = require("prompt-sync")({ sigint: true });
let num;
do {
    num = prompt("Введите число больше 100: ");
} 
while (num <= 100 && num);