// sum of numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;

}
console.log(sum);




// factorial
let fact = 1, n = 5;
while (n >= 1) {
    fact = fact * n;
    n = n - 1;
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