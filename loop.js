// let i = 0;
// while (i <= 15) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// }

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// odd numbers
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }

}
// odd numbers decrement
for (let i = 10; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }

}
// even numbers decrement
for (let i = 10; i >= 1; i--) {
    if (i % 2 == 0) {
        console.log(i);
    }

}

// even numbers
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }

}


// while loop
// let i =10;
// while (i >= 1) {
//     if (i % 2 !== 0) {
//         console.log(i);

//     }
//     i--;
// }
// 
// let i = 5;
// while (i <= 10) {
//     if (i % 2 == 0) {
//         console.log(i);

//     }
//     i++;
// }


// Do while
let i = 11;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);


// for-in object
// call keys by . or by []
const person = {
    name: "raghul",
    age: 25,
    gender: "male"
};
for (let key in person) {
    console.log(key + ":", person[key]);
}

// for-in array index position will display
let mobiles = ["vivo", "oppo", "oneplus"];

for (let key in mobiles) {
    console.log(key);
}

// for-in array 
let colors = ["red", "green", "yellow"];
for(let key in colors){
    console.log(colors[key]);
}

// for-of array gives value
for (let mobile of mobiles) {
    console.log("color: " + mobile);
}