// // Addition
// let a = 10;
// let b = 30;
// let c = a + b;
// console.log(c);

// // Subtraction
// let x = 10;
// let y = 40;
// let z = x - y;
// let j = y - x;

// console.log(z);
// console.log(j);
// typeof j;

// // 
// let d = 1 + "1";
// console.log(d);
// typeof d;

// // 
// var e = 20;
// var f = 5;
// var g = e/f;
// console.log(g);

// // 
// let h = 7;

// let i = ++h;
// console.log(i);

// // 
// for (let k = 0; k < 10; k++) {
//     console.log(k);
// }
// // 
// let age = 50;
// age > 50;
// age < 50;


// Assignment Operator
var x = 5, y = 10, z = 15;

x = y; //x would be 10

x += 1; //x would be 6

x -= 1; //x would be 4

x *= 5; //x would be 25

x /= 5; //x would be 1

x %= 2; //x would be 1

// ++,--
var x = 5;

x++; //post-increment, x will be 5 here and 6 in the next line

++x; //pre-increment, x will be 7 here  

x--; //post-decrement, x will be 7 here and 6 in the next line

--x; //pre-decrement, x will be 5 here


// +operator with String
var a = 5, b = "Hello ", c = "World!", d = 10;

a + b; //returns "5Hello "

b + c; //returns "Hello World!"

a + d; //returns 15

b + true; //returns "Hello true"

c - b; //returns NaN; - operator can only used with numbers

// Comparison Operators

return true / false
var a = 5, b = 10, c = "5";
var x = a;

a == c; // returns true

a === c; // returns false

a == x; // returns true

a != b; // returns true

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true

// Logical Operators
var a = 5, b = 10;

(a != b) && (a < b); // returns true

(a > b) || (a == b); // returns false

(a < b) || (a == b); // returns true

!(a < b); // returns false

!(a > b); // returns true

// Arithmetic Operators
var x = 5, y = 10;

var z = x + y; //performs addition and returns 15

z = y - x; //performs subtraction and returns 5

z = x * y; //performs multiplication and returns 50

z = y / x; //performs division and returns 2

z = x % 2; //returns division remainder 1

// Relational
const trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
// not the value at that index)
'length' in trees; // returns true (length is an Array property)