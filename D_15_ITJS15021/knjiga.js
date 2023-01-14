export class Knjiga {
    constructor(n, a, g, b, c) {
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = g;
        this.brojStrana = b;
        this.cena = c;
    }

    // NASLOV
    set naslov(n) {
        if(n.length > 0) {
            this._naslov = n;
        }
        else {
            this.naslov = "Naslov";
        }
    }

    get naslov() {
        return this._naslov;
    }

    //AUTOR
    set autor(a) {
        if(a.length > 0) {
            this._autor = a;
        }
        else {
            this._autor = "Autor";
        }
    }

    get autor() {
        return this._autor;
    }

    //GODINA IZDANJA
    set godIzdanja(g) {
        if(g > 0) {
            this._godIzdanja = g;
        }
        else {
            this._godIzdanja = "Godina";
        }
    }

    get godIzdanja() {
        return this._godIzdanja;
    }

    //BROJ STRANA
    set brojStrana(b) {
        if(b > 0) {
            this._brojStrana = b;
        }
        else {
            this._brojStrana = "Broj strana";
        }
    }

    get brojStrana() {
        return this._brojStrana;
    }

    //CENA
    set cena(c) {
        if(c > 0) {
            this._cena = c;
        }
        else {
            this._cena = "Cena";
        }
    }

    get cena() {
        return this._cena;
    }

    //STAMPAJ
    stampaj() {
        document.body.append(this);
    }

    //OBIMNA
    obimna() {
        if(this._brojStrana > 600) {
            return true;
        }
        else {
            return false;
        }
    }

    //SKUPA
    skupa() {
        if(this._cena > 8000) {
            return true;
        }
        else false;
    }

    //DUGACKO IME
    dugackoIme() {
        if(this._autor.length > 18) {
            return true;
        }
        else {
            return false;
        }
    }
}
