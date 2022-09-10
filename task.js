// sum of numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;

}
console.log(sum);  


// factorial
let factorial = 1, number = 5;
for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial);

// 
let fact = 1;
let f4 = 5;
for (let i = f4; i >=1; i--) {
    fact = fact * i;
}
console.log(fact);

// ascending order using for loop
function value() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
value();

// ascending order using while loop

function value() {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++
    }
}
value();
// decending order using for loop

for (let i = 10; i >= 1; i--) {
    console.log(i);
}



// armstrong number
let x = 153;
let y = x;
let z = 0;
while (x > 0) {
    let remainder = x % 10;
    z += remainder ** 3;
    x = Math.floor(x / 10);
}
if (y == z) {
    console.log("number is an armstrong number");
}
else {
    console.log("number is not an armstrong number");
}

// Reverse number
let a = 153;
let c = 0;
while (a > 0) {
    let rem = a % 10;
    c = (c * 10) + rem;
    a = Math.floor(a / 10);
}
console.log(c);

// 


































