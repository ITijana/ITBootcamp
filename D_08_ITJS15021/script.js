// 1. zadatak
let mera = 3;
let kafic = 100;
let gosti = 50;
let maxGostiju = Math.floor(kafic / mera);
//console.log(maxGostiju);
let odlazi = gosti - maxGostiju;

if(mera * gosti <= kafic) {
    document.write("<p style='color:green';> DA </p>");
}
else {
    document.write("<p style='color:red;'> NE </p>");
    document.write(`<p>Potrebno je da lokal napustiti ${odlazi} ljudi.</p>`)
}

// 2. zadatak
let n = 15;
let m = 33;
let i = n;
let zbir = 0;

while(i <= m) {
    if(i % 3 == 0 && i % 7 != 0) {
        zbir = zbir + i;
    } i++;
} 

console.log(`Zbir brojeva od ${n} do ${m} koji su deljivi sa 3 a nisu sa 7 je ${zbir}.`);

// 3. zadatak
n = 33;
i = 1;
let brojDelioca = 0;
let brojDelioca1 = 0;

while(i <= n) {
    if(n % i == 0) {
        brojDelioca = i;
        if(brojDelioca % 3 == 0 && brojDelioca % 2 != 0) {
            brojDelioca1++;
        }
    } i++;
} 
console.log(`Broj ${n} ima ${brojDelioca1} delioca koji su deljivi sa brojem 3 i neparni su.`);


