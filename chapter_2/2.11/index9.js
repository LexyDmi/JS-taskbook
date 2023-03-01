const prompt = require("prompt-sync")({ sigint: true });
let login = prompt("Кто там? ");
if (login === 'Admin'){
    let password = prompt("Введите пароль: ");
    if (password === 'I am the boss')
        console.log("Здравствуйте!");
    else if (password === '' || password === null)
        console.log("Отменено");
    else
        console.log("Неверный пароль");    
}
else if (login === '' || login === null)
    console.log("Отменено");
else
    console.log("Я вас не знаю");