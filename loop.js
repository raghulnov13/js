let i = 0;
while (i <= 15) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}



let age = 15;
let parentPermission = false
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

