function aclean(arr) {
    let map = new Map();
    for (let i of arr) {
        let sorted = i.toLowerCase().split("").sort().join(""); 
        map.set(sorted, i);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"