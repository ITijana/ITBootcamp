// 1. zadatak
let n = 5;
for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        document.write(`<img class='parni' src="${1}.png">`);
    }
    else {
        document.write(`<img class='neparni' src="${1}.png">`);
    }
}

// 2. zadatak
n = 11;
let broj = 2;

for (i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
        broj++;
    }
}
if (broj == 2) {
    console.log(`Broj ${n} je prost broj`);
}
else {
    console.log(`Broj ${n} nije prost broj`);
}