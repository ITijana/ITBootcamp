import { Knjiga } from "./knjiga.js";

let knjiga1 = new Knjiga("Lovac na zmajeve", "Haled Hoseini", 2010, 255, 900);
let knjiga2 = new Knjiga("Deca zla", "Miodrag Majic", 2018, 650, 8500);
let knjiga3 = new Knjiga("Igra andjela", "Ljiljana Habjanovic Djurovic", 2015, 435, 1100);

let knjige = [knjiga1, knjiga2, knjiga3];

// Ispis autora kojima je ime dugacko
let btnAutor = document.getElementById("autori");
let pIme = document.getElementById("ime");

btnAutor.addEventListener("click", () => {
    knjige.forEach(k => {
        if (k.dugackoIme()) {
            pIme.innerHTML = k.autor;
        }
    });
});

// Ispis knjiga koje su skupe i obimne
let btnSkupeObimne = document.getElementById("obimneSkupe");
let pKnjige = document.getElementById("knjige");

btnSkupeObimne.addEventListener("click", () => {
    knjige.forEach(k => {
        if (k.obimna() && k.skupa()) {
            pKnjige.innerHTML = k.naslov;
        }
    });
});

// Funkcija ukupnaCena
let pUkupno = document.getElementById("ukupnaCena");

let ukupnaCena = niz => {
    let ukupno = 0;
    knjige.forEach(k => {
        ukupno += k.cena;
    });
    return ukupno;
}

pUkupno.innerHTML = (`Ukupna cena svih knjiga je: ${ukupnaCena(knjige)} dinara.`);

//Funkcija prosecnaCena
let pProsek = document.getElementById("prosecnaCena");

let prosecnaCena1 = niz => {
    let suma = ukupnaCena(niz);
    let br = 0;
    niz.forEach(k => {
        if(k.cena) {
            br++;
        }
    });
    return suma / br;
}

pProsek.innerHTML = (`Prosecna cena knjige je: ${prosecnaCena1(knjige)} dinara.`);

// Funkcija prosecnaStranica
let pStranica = document.getElementById("cenaStranice")

let prosecnaStranica = niz => {
    let cena = ukupnaCena(niz);
    let prosek = 0;
    let br = 0;

    niz.forEach(k => {
        if(k.brojStrana) {
            br += k.brojStrana;
        }
        prosek = cena / br;
    });
    return prosek;   
}

pStranica.innerHTML = `Prosecna cena jedne stranice knjige je: ${(prosecnaStranica(knjige))} dinara.`;