// 1. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let prodavnica = ["Voce", "Povrce", "Meso"];

let kupovina = niz => {
    let spisak = "<ul>";
    for (let i = 0; i < niz.length; i++) {
        spisak += `
        <li>${niz[i]}</li>
        `;
    }
    spisak += "</ul>";
    return spisak;
}

document.write(kupovina(prodavnica));

// 2. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu gde svaki od redova ima ćeliju u kojoj se nalazo naziv tima. Tabelu ispisati u html dokument.
let tim = ["Partizan", "Zvezda", "Sacramento"];

let kosarka = niz => {
    let tim = "<table>";
    for(let i = 0; i < niz.length; i++) {
        tim += `
        <tr>
            <td>${niz[i]}</td>
            <td></td>
            <td></td>
        </tr>
        `;
    }
    tim += "</table>";
    return tim;
}

document.write(kosarka(tim));

// 3. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve slike u html dokumentu, pri čemu su putanje da slika one putanje koje su navedene u nizu.
let putanja = ["1.jpg", "2.jpg", "3.jpg"];

let slika = niz => {
    for(let i = 0; i < niz.length; i++) {
        document.write(`<img src = "${niz[i]}">`)
    }
}

slika(putanja);

