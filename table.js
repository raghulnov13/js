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