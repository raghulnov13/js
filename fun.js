// Function Declaration
function raghul() {
    console.log("raghul");
}
raghul();

// Function Expression
let data = function raghul() {
    console.log("raghul");
}
raghul();

// Function 

// Function IISF
(function (raghul) {
    console.log(raghul);
})("WEB DEVELOPER");

// Arrow function ex. one line function
const arrow = (a, b) => a + b;
console.log(arrow(95, 5));

// Arrow function ex. one line function
let square = a => a * a;
console.log(square(5));



function ral(civil) {
    if (civil > 100) {
        return 'good';
    }
    else {
        return 'ok';

    }

}

console.log(ral(101));


// Program to check number is positive or not
function value(a) {
    if (a > 0) {
        return "a is positive";
    }
    else {
        return "a is negative"
    }
}
console.log(value(10));

// 
function add(num1, num2) {
    console.log(num1 + num2);
}
add(100, 200)

// 
function user(firstName, secondName) {
    let detail = "Hello " + firstName + " " + secondName + "Welcome to IT field"
    console.log(detail);
}
user("Raghul", "Raj ")


// fun arguments
function sumExpense() {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return total;
}
let result = sumExpense(120, 30, 40, 500, 70, 470, 280);
// console.log(result);
console.log(`your result is : ${result}`);

// rest operator for deduction
function sumExpense(loan, ...expenses) {
    let total1 = expenses.reduce((a, b) => a + b);
    return total1 - loan;
}
let result1 = sumExpense(10, 120, 30, 40, 500, 70, 470, 280);
console.log(`your result is : ${result1}`);