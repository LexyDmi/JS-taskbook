// 1-й вариант
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

// 2-й вариант
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}