const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("Введите a: ");
let b = prompt("Введите b: ");
let result = (+a + +b < 4) ? 'Мало' : 'Много';
console.log(result);