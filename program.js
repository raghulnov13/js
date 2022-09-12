// no of vowels in a word or sentance.

function noOfVowels(word) {
    var listOfVowels = 'aAeEiIoOuU';
    var vowelsCount = 0;
    for (var i = 0; i < word.length; i++) {
        if (listOfVowels.indexOf(word[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(noOfVowels("raghul"));

// num to string.

var num = 567;
var reverse = 0;

while (num != 0) {
    reverse = (reverse * 10) + (num % 10);
    num = parseInt(num / 10)
    switch (reverse % 10) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
    }
}

// num to string.

var num = 565;
var reverse = 0;
console.log(num);

while (num != 0) {
    reverse = (reverse * 10) + (num % 10);
    num = parseInt(num / 10)
}

while (reverse != 0) {
    switch (reverse % 10) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
    }
    reverse = parseInt(reverse / 10);
}


// hi for *3 , hello for *5

for (x = 1; x <= 50; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("hi,hello");
    }
    else if (x % 3 == 0) {
        console.log("hi");
    }
    else if (x % 5 == 0) {
        console.log("hello");
    }

    else {
        console.log(x);
    }
}
// 
function noOfVowels(a,b) {
    var listOfVowels = 'aAeEiIoOuU';
    var vowelsCount = 0;
    for (var i = 0; i < a.length; i++) {
        if (listOfVowels.indexOf(a[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
    for (var j = 0; j < b.length; j++) {
        if (listOfVowels.indexOf(b[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(noOfVowels("raghul","ravanth"));





