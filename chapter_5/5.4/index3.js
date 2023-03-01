let arr = ["a", "b"];

arr.push(function () {
    alert(this);
});

arr[2](); // вызываем массив как метод: a, b, function()