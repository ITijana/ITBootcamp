let sportisti = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if (request.readyState === 4) {
            reject("Greska");
        }
    });
    request.open("GET", "../sportisti.json");
    request.send();
}


let ispis = poruka => {
    console.log(poruka);
}

// 1. ZADATAK
let visina = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(e => {
        if (e.visina) {
            suma += e.visina;
            br++;
        }
    });
    console.log(`Prosecna visina je ${suma/br}cm.`);
}

sportisti(visina, ispis);

// 2. ZADTAK
let transfer = niz => {
    let min = niz[0].timovi.length;
    let sportista = niz[0];
    niz.forEach(e => {
        if(e.timovi.length < min) {
            min = e.timovi.length;
            sportista = e.imePrezime;
        }
    });
    console.log(sportista);
}

sportisti(transfer, ispis);

// 3. ZADATAK
let lakers = niz => {
    let b = "";
    niz.forEach(e => {
        if (e.timovi.includes("Lakers")) {
            b += e.imePrezime + " ";
        }
    });
    console.log(`Sportisti koji su igrali za Lakers-e su: ${b}`);
}

sportisti(lakers, ispis);

