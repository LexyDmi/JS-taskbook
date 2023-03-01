const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

console.log((+a + +b)); 