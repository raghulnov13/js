// how many vowels in name to printe the num//

let a = "Raghulraj";
let y = ['a', 'e', 'i', 'o', 'u']
let sum = 0
for (i = 0; i < a.length; i++) {
    if (y.includes(a[i])) {
        sum += 1;
    }
}
console.log(sum);

//  Print numbers in words in reverse order//

let n = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
let x = '845';
let t = ''
for (i = x.length - 1; i >= 0; i--) {
    t += x[i]
}
for (j = 0; j < t.length; j++) {
    for (k = 0; k < n.length; k++) {
        if (t[j] == k) {
            console.log(n[k])
        }
    }

}