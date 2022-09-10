// String Property and Methods
var a = "Welcome to the new world";
var b = " Start the journey ";
var c = "the world is the best world also the worst one";
var d = "frontend and backend development";
var e = "hai hai hai"

// charAt
console.log(a.charAt(6));

// charCodeAt
console.log(a.charCodeAt(1));
console.log(b.charCodeAt(1));

// Concat
console.log(a.concat(b));

// length
console.log(a.length);
console.log(d.length);

// endsWith
console.log(a.endsWith("world"));
console.log(b.endsWith("king"));

// startsWith
console.log(a.startsWith("W"));
console.log(b.startsWith("S"));

// includes
console.log(a.includes("the"));

// indexOf
console.log(a.indexOf("world"));
console.log(b.indexOf("Start"));

// lastIndexOf
console.log(c.lastIndexOf("the"));
console.log(d.lastIndexOf("end"));
console.log(e.lastIndexOf("hai"));

// match returns in array
console.log(d.match(/end/g))
console.log(c.match(/the/g))

//repeat
console.log(b.repeat(3)); 
console.log(e.repeat(10)); 

// replace
console.log(d.replace(/end/g, "END"));

// slice from position 7-13
console.log(a.slice(7, 13));
console.log(a.slice(-13,-7));
console.log(b.slice(10, 18));
console.log(c.slice(10, 18));

// substr indexvalue and counts next value from 1
console.log(a.substr(14, 11));
console.log(a.substr(3, 4));
console.log(a.substr(-14,));

// substring index value and again conitue to count with index value
console.log(a.substring(3,8));

// search
console.log(d.search("end"));
console.log(c.search("the"));

// split
console.log(a.split(" "));
console.log(d.split(" "));

// toUpperCase
console.log(a.toUpperCase());

// toLowerCase
console.log(a.toLowerCase());

// trim removes spcae from start and end not center
let f = "     topic over      ";
console.log(f.trim());

// trimEnd
console.log(f.trimEnd());

// trimStart
console.log(f.trimStart());

console.log(a.codePointAt(7));