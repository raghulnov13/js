// Table
const number = 3;
for (i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} =${result}`);
}

// Factorial number
let num = 16

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}

// N numbers
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// 
var value = 20;
for (i = 2; i < value; i++) {
    if (value % 2 == 0) {
        console.log("prime number");
    }
    else {
        console.log("not a prime number");
    }
}

// Fibonacci Series
let n1 = 0, n2 = 1, nextTerm;
const fib = 4;

for (let i = 1; i <= fib; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// 
let a1 =[2,4,6,8,10,12,14,16];
let b1 =[1,3,5,7,9,11,13,15];

let asce = a1.concat(b1);
asce.sort();
console.log(asce);


