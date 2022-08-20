// Program to find marriage eligibility
let age = 17;
if (age >= 18) {
    console.log("eligible");
}
else {
    console.log("not eligible");
}

// Method 2
function check(age) {
    if (age >= 18) {
        return "eligible";
    }
    else {
        return "not eligible";
    }
}

console.log(check(17));

// Program to check number is positive or not
// method 1
function value(a) {
    if (a > 0) {
        return "a is positive";
    }
    else {
        return "a is negative"
    }
}
console.log(value(10));

// method 2
let num = 17;
if (num > 0) {
    console.log("positive");
}
else {
    console.log("not positive");
}


// odd 

var value = 5;
if (value % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

// even
var value = 6;
if (value % 2 != 0) {
    console.log("odd");
}
else {
    console.log("even");
}


// Program to calculate total and average
let tamil = 60
let english = 90
let maths = 98
let total = tamil + english + maths;
let avg = total / 3;
console.log(total);
console.log(avg);

// Program for large number
let l = 98; l1 = 555;
if (l < 100) {
    console.log(l1 + "is smaller than" +l );
}
else {
    console.log("larger");
}

// Program to check number is greater than 10
let t = 6;
if (t < 10) {
    console.log("smaller");
}
else {
    console.log("larger");
}

// Program to check whether number is divisible by 5
var div = 25;
if (div % 5 == 0) {
    console.log("divisible");
}
else {
    console.log("not divisible");
}

// Simple Interest
let P = 1, R = 1, T = 1;
let SI = (P * R * T)/100;
console.log(SI);

// area of circle
let  r = 5;
let area = (Math.PI * r * r);
console.log(area);

// Addition
let n = 10;
let b = 30;
let c = n + b;
console.log(c);

// Subtraction
let x = 10;
let y = 40;
let z = x - y;
let j = y - x;

console.log(z);
console.log(j);
typeof j;

// Division
var e = 20;
var f = 5;
var g = e / f;
console.log(g);

// Multiply
var m = 10;
var u = 5;
var p = m * u;
console.log(p);

// Sort
const mobile = ["vivo", "oppo", "apple", "oneplus"];
console.log(mobile.sort());
console.log(mobile.reverse());


// 
let f1 =45;
if (f1%11 ==0 ){
	console.log("divisible");
}
else{
	console.log("not divisible");
}




