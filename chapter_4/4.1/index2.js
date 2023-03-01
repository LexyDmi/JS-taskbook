function isEmpty(obj) {
    let i = 0;
    for (let key in obj) {
        i++;
    }
    return i != 0 ? false : true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); //false