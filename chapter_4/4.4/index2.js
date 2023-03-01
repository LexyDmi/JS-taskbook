const prompt = require("prompt-sync")({ sigint: true });

let calculator = {
    read(a, b) {
        this.a = +prompt("Введите a: ", 0);
        this.b = +prompt("Введите b: ", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
