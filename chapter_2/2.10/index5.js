const prompt = require("prompt-sync")({ sigint: true });
let login = prompt("Введите логин: ");
let message = (login == 'Сотрудник') ? 'Привет' : 
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : 
    '';
console.log(message);
