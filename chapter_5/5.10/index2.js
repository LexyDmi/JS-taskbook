function topSalary(salaries) {
    let max_salary = 0;
    let top_employee = null;
    for (let [name, salary] of Object.entries(salaries)) {
        if (max_salary < salary) {
            max_salary = salary;
            top_employee = name;
        }
    }
    return top_employee;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));
