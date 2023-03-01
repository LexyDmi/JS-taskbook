const prompt = require("prompt-sync")({ sigint: true });

function readNumber() {
    let number;
    do {
        number = prompt("Введите число: ", 0);
    } while (!isFinite(number));
    if (number === null || number === '') 
        return null;
    return number;
}

console.log(readNumber());