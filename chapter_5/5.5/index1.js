function camelize(str) {
    let str2 = '';
    let bool = false;
    let arr = str.split('');

    for (let i of arr) {
        if (i === '-') {
            bool = true;
            continue;
        }
        if (bool === true) {
            str2 += i.toUpperCase();
            bool = false;
            continue;
        }
        if (i !== '-') {
            str2 += i;
        }
    }
    return str2;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));