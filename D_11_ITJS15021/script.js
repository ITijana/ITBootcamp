// 1.Napisati funkciju koja vraća aritmetičku sredinu brojeva koji nisu deljivi sa 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

// 1. nacin
function as(n, m) {
    let suma = 0;
    let br = 0;
    for(i = n; i <= m; i++) {
        if(i % 3 != 0) {
            suma += i;
            br++;
        } as = suma / br;
    } return as;
}

console.log(as(2, 13));

// 2. nacin
let aSredina = (n, m) => {
    let suma = 0;
    let br = 0;
    for(i = n; i <= m; i++) {
        if(i % 3 != 0) {
            suma += i;
            br++;
        } as = suma / br;
    } return as;
}

console.log(aSredina(5, 16));


// 2.Napisati funkciju kojoj se prosleđuje ceo broj i string, a ona ispisuje taj string u paragrafu koji ima prosleđenu veličinu fonta.

// 1.nacin
function stringBr(n, m) {
    document.write(`<p style="font-size:${n}px;">${m}</p>`);
}  

stringBr(20, "Ovo je prvi paragraf");

//2.nacin
let paragraf = (n, m) => document.write(`<p style="font-size:${n}px;">${m}</p>`);
paragraf(30, "Ovo je drugi paragraf");