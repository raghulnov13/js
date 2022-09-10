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
    console.log(l1 + "is smaller than" + l);
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
let SI = (P * R * T) / 100;
console.log(SI);

// area of circle
let r = 5;
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
let f1 = 45;
if (f1 % 11 == 0) {
    console.log("divisible");
}
else {
    console.log("not divisible");
}



// //Grade sum using If
// let mark = 88;

// if (mark >= 90){
// document.write("A grade");
// }
// else if (mark >=80){
// document.write("B grade");
// }
// else if (mark >= 70){
// document.write("C grade");
// }
// else if (mark >= 50){
// document.write("D grade");
// }
// else{
// document.write("F grade");
// }

//Grade sum using If
let mark = 88;

if (mark >= 90) {
    console.log("A grade");
}
else if (mark >= 80) {
    console.log("B grade");
}
else if (mark >= 70) {
    console.log("C grade");
}
else if (mark >= 50) {
    console.log("D grade");
}
else {
    console.log("F grade");
}

// multiply of 7
var s = 21;
if (s % 7 == 0) {
    console.log("divisible by 7");
}
else {
    console.log("not divisible by 7");
}

// Quadratic formula   -b+-squareroot(b2-4ac)/2a
let a1 = 2
let b1 = 4
let c1 = 5

let root = Math.sqrt(b1 * b1 - 4 * a1 * c1);
let denom = 2 * a1;

let root1 = (b + root) / denom;
let root2 = (-b - root) / denom;

console.log(root1);



// decending
let v2 = [20, 40, 50]
let v3 = v2.sort((v2,v3)=>v3-v2)
console.log(v3)


// 

let licenseAge = 22
let rto = "pass"

if (licenseAge>=18 && rto=="pass"){
    console.log("eligible for license");
}
else{
    console.log("not eligible for license");
}

// 
let age2 = +prompt("enter your age");
let gender = prompt("enter your gender");

if (age2>=20 && age2<=40 && gender=="male"){
    console.log("work anywhere");
}
else if (age2>=40 && age2<=60 && gender=="male"){
    console.log("work in urban areas only");
}
else if (gender=="female"){
    console.log("work in urban areas only");
}
else{
    console.log("error");
}

let age = 15;
let parentPermission = false;
if (age < 18) {
    if (parentPermission == true)
    {
    console.log("allowed");
}
else {
    console.log("not allowed");
}
}
else if (age > 50) {
    console.log("not allowed"); 
}
else
    console.log("allowed");


// 
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(456)));



// 
/ array
var marks = [];
marks.push(20);
marks.push(30);
marks.push(40);
marks.push(50);
marks.push(60);
marks.push(70);

console.log(marks);


// 11. Program to calculate total and average
let tamil = 60
let english = 90
let maths = 98
let total = tamil + english + maths;
let avg = total / 3;
console.log(total);
console.log(avg);


// 12. Program for large number



// 14. Program to check number is greater than 10



// 16. Program to check whether number is divisible by 5


// 18. Ascending and Decending order of 3 numbers

// Swap 2numbers
let apple = 30;
let mango = 40;
let temp = apple;
apple = mango;
mango = temp;
console.log(mango);
console.log(apple);
// program
// 21. Program to find marriage eligibility

// function check(age) {
//     if (age >= 18) {
//         return "eligible";
//     }
//     else {
//         return "not eligible";
//     }
// }

// console.log(check(17));

//
let age = 17;
if (age >= 18) {
    console.log("eligible");
}
else {
    console.log("not eligible");
}



// 13.Program to check number is positive or not
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
    console.log("odd");
}
else {
    console.log("even");
}


// even number






















