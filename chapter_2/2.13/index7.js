const prompt = require("prompt-sync")({ sigint: true });
let n = prompt("Введите число: ", 10);
let m = [];

nextPrime:
for (let i = 2; i <= n; i++) { 
    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
    }
    console.log(i); 
}
