// 1. zadatak
let pera, mika, kusur;
pera = 1000;
mika = 800;
kusur = 800;
let cena = (pera + mika - kusur) / 2;
console.log(cena);
let kusurPera = pera - cena;
let kusurMika = mika - cena;

console.log(`Pera je dobio kusur u iznosu od ${kusurPera} dinara.`); 
console.log(`Mika je dobio kusur u iznosu od ${kusurMika} dinara.`);


// 2.zadatak
let poglavlje = 15;
let prviDan = 5;
let drugiDan = prviDan + 2;
let preostalo = poglavlje - prviDan - drugiDan;
/*console.log(preostalo);*/

if(preostalo < poglavlje/2) {
  console.log("Ostalo je da se pročita još manje od polovine.");
}

// 3.zadatak
let u = 2500;
let kcal = u / 4.1868;
/*console.log(kcal);*/

if(kcal < 2000) {
  console.log("Potrebno je povećati dnevni unos.");
}
else {
  console.log("Nije potrebno povećati dnevni unos.");
}

