function checkSpam(str) {
    let lowStr = str.toLowerCase();
    if (lowStr.includes('viagra') || lowStr.includes('xxx'))
        return true;
    else
        return false;
}

console.log(checkSpam('buy ViAgRA now')); 
console.log(checkSpam('free xxxxx')); 
console.log(checkSpam("innocent rabbit")); 
