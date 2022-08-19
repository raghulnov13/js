const list = [
    { name: "Briyani", price: 120, },
    { name: "Dosa", price: 40 },
    { name: "Idly", price: 10 },
    { name: "Pongal", price: 30 },
    { name: "Chicken", price: 200 },
    { name: "Mutton", price: 300 },
    { name: "Meals", price: 180 },
];


// filter method output comes in array inside with object [{...} {...}]
const filteredElements = list.filter((list) => {
    return list.price <= 100;
}
);

// console.log(filteredElements);

// -----------------------

// Map method used to display separate name or price list
const listNames = list.map((list) => {
    return list.name;
}
);

console.log(listNames);

// ------------------------------

// find method used to find single object in array
// output comes in

let findlist = list.find((list) => {
    return list.name === "Mutton";
}
)
console.log(findlist);

// ------------------
// foreach used to change element values

list.forEach((list) => {
    console.log(list.price * 1.5);
}
);

// ---------------
// some return true or false

const hasExpensiveLists = list.some(list => {
    return list.price <= 5
}
);
console.log(hasExpensiveLists)

// --------------
// every return true or false if all elements satisty the content it will give true

const hasExpensiveListsEvery = list.every(list => {
    return list.price <= 1000
}
);
console.log(hasExpensiveListsEvery)

// ---------------

// reduce used to 
const total = list.reduce((currentTotal, list) => {
    return list.price + currentTotal;

}, 10);
console.log(total);

// ---------------------------------
const items = [
    { id: 1, name: "apple mobile", cost: 70000 },
    { id: 2, name: "oneplus", cost: 40000 },
    { id: 3, name: "vivo", cost: 30000 },
    { id: 4, name: "oppo", cost: 28000 },
]

// filter
let ral = items.filter(function (value) {
    return value.cost < 60000;
}

);

// console.log( ral);

// find
let raghul = items.find(function (value) {
    return value.cost < 40000;
}

);

console.log(raghul);

// findIndex

let ra = items.findIndex(function (value) {
    return value.cost < 40000;
}

);

console.log(ra);


// map we can change own behaviour values
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

let final = numbers.map(function (val) {
    return val * 10;
});
console.log(final);

// example using reference
const people = [
    { id: 1, first_name: "Raghul", last_name: "raj" },
    { id: 2, first_name: "Virat", last_name: "kohli" },
    { id: 3, first_name: "Ms", last_name: "dhoni" },
    { id: 4, first_name: "David", last_name: "warner" },

];

let detail = people.map(function (ans) {
    return ans.first_name + ans.last_name;
});
console.log(detail);

// return values in array
let name = people.map(function (info) {
    return [info.first_name, info.last_name].join(" ");
});
console.log(name);
//  map will also give boolean result for all array
//diff btwn map and reduce... reduce will give single values

// reduce
const donations = [100, 200, 50, 325, 150, 3000]

// donations.reduce (function(previousValue, currentValue){

//     console.log("previousValue", previousValue);
//     console.log("currentValue", currentValue);

//     return previousValue + currentValue;

// });

// for total value
// let totalDonations = donations.reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue;
// });

// console.log("totalDonations", totalDonations);


// 
let P = 1, R = 1, T = 1;
let SI = (P * R * T);
console.log(SI);

// area of circle
let a = 3.14, r = 5;
let area = (a * r * r);
console.log(area);


var x = 5;
if (x < 0) {
    console.log("negative");
}

else {
    if (x > 0)
        console.log("positive");
}




// Date



// Get Method
const d = new Date();
console.log(d.getTime());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(Date.now());

// 
for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * (100 + 1)));
}

// Dies
function rollDie() {
    let play = [1, 2, 3, 4, 5, 6];
    let roll = Math.floor(Math.random() * play.length);
    var game = play[roll];
    console.log(game);
}
    rollDie();

// function throwDice() {
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
// }

// 
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  
//   console.log(getRandomInt(2));
  // expected output: 0-100


  