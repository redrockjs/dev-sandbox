// function Palindrome(str) {
//   let reverseStr=str.split("").reverse().join("");
//
//   // code goes here
//   return str === reverseStr
//
// }
//
// // keep this function call here
// console.log(Palindrome("!yey"))


function PrimeChecker(num) {
    let tmp = num.toString().split("")
    let arr = []
    let tm = ""

    let simple = true;
    for (let i = 2; i< num; i++) {
        if (num % i == 0) {
            simple = false
            break;
        }
    }

// code goes here

    return num;

}

PrimeChecker(910)
// keep this function call here
//console.log(PrimeChecker(readline()));

// function* permutation(s) {
//     if (s.length < 3) {
//         yield s;
//         if (s.length == 2) yield s[1] + s[0];
//     } else {
//         for (let i = 0; i < s.length; i++) {
//             let h = s[i];
//             for (let t of permutation(s.substr(0, i) +
//                 s.substr(i + 1))) yield h + t;
//         }
//     }
// }
//
// for (let s of permutation("910")) {
//     console.log(s)
// }