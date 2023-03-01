const prompt = require("prompt-sync")({ sigint: true });

let a = prompt("Введите a: ");
let b = prompt("Введите b: ");

console.log(+a + +b);