// 1. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.

// 2. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.

// 3. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

let dan = {
    datum: "2022/12/23",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperatura: [12, 10, 5, 1],
    tropski: function() {
        let tropskiDan = true; 
        this.temperatura.forEach(e => {
            if(e < 24) {
                tropskiDan = false;
            }
        });
        return tropskiDan;
    },
    nepovoljan: function() {
        for(let i = 0; i < this.temperatura.length; i++) {
            if(this.temperatura[i] - this.temperatura[i + 1] > 8) {
                return true;
            }
            else if(this.temperatura[i] - this.temperatura[i + 1] < -8) {
                return true;
            }
        } 
        return false;
    },
    neuobicajen: function() {
        let neuobicajenDan = false;
        this.temperatura.forEach(e => {
            if(this.kisa == true && e < -5) {
                neuobicajenDan = true;
            }
            if(this.oblacno == true && e > 25) {
                neuobicajenDan = true;
            }
            if(this.kisa == true && this.oblacno == true && this.sunce == true) {
                neuobicajenDan = true;
            }
        }); 
        return neuobicajenDan;
    }
};

console.log(dan.tropski());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());