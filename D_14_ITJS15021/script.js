let knjiga1 = {
    naziv: "Lovac na zmajeve",
    autor: "Haled Hoseini",
    slika: "1.jpg",
    polje: true
};

let knjiga2 = {
    naziv: "Deca zla",
    autor: "Miodrag Majic",
    slika: "2.jpg",
    polje: true
};

let knjiga3 = {
    naziv: "Covek po imenu Uve",
    autor: "Fredrik Bakman",
    slika: "3.jpg",
    polje: false
};

let knjiga = [knjiga1, knjiga2, knjiga3];

let tabela = knjiga => {
    let body = document.body,
    tbl = document.createElement('table');
    tbl.style.width = '300px';
    for (let i = 0; i < knjiga.length; i++) {
      let tr = tbl.insertRow();
      for (let j = 0; j < 2; j++) {
        if (j == 0) {
          let td = tr.insertCell();
          let slika = document.createElement('img');
          slika.setAttribute('src', knjiga[i].slika);
          slika.style.width = '50px';
          td.appendChild(slika);
          td.style.border = '2px solid black';
        }
        else {
          let td = tr.insertCell();
          let para = document.createElement('p');
          let nazivAutor = document.createTextNode(`${knjiga[i].autor} ${knjiga[i].naziv}`);
          para.appendChild(nazivAutor);
          if (knjiga[i].polje) {
            para.style.color = 'blue';
          }
          else {
            para.style.color = 'gray';
          }
          td.appendChild(para);
          td.style.border = '2px solid black';
        }
      }
    }
    body.appendChild(tbl);
}
  
tabela(knjiga);