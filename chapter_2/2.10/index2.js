const prompt = require("prompt-sync")({ sigint: true });
let name_js = prompt("Какое «официальное» название JavaScript? ");
if (name_js === 'ECMAScript')
    console.log('Верно!');
else
    console.log("Не знаете ? ECMAScript!");
    