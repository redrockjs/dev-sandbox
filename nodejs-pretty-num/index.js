function isPretty(n) {
    let str = "" + n;
    for (let i = 0; i <= str.length; i++) {
        for (let j = 0; j <= str.length; j++) {
            if ((i != j) && (str[i] === str[j])) return true
        }
    }
    return false
}

let summ = 0;

for (let i = 1; i <= 10000; i++) {
    if (isPretty(i)) summ += i
}

console.log(`Итоговая сумма ${summ}`);