let movie = db.collection("movies");

db.collection("movies")
    .doc("movieOne")
    .set({
        Name: "The menu",
        Director:
        {
            Name: "Mark",
            Surname: "Mylod"
        },
        Release_year: 2022,
        Genres: ["Comedy", "Narrative"],
        Rating: 7
    })
    .then(() => {
        console.log("Uspesno ste dodali novi film");
    })
    .catch(() => {
        console.log("Javila se greska");
    })

db.collection("movies")
    .doc("movieOne")
    .update({
        Rating: firebase.firestore.FieldValue.arrayUnion(8.2)
    })
    .then(() => {
        console.log("Uspesno ste izmenili podatke o filmu");
    })
    .catch(() => {
        console.log("Javila se greska");
    })

db.collection("movies")
    .doc("NypokvoBI5qqUUZGaJb7")
    .set({
        Name: "The menu",
        Director:
        {
            Name: "Mark",
            Surname: "Mylod"
        },
        Release_year: 2022,
        Genres: ["Comedy", "Narrative", "Romance"],
        Rating: 7
    })
    .then(() => {
        console.log("Uspesno ste dodali novi zanr");
    })
    .catch(() => {
        console.log("Javila se greska");
    })


db.collection("movies")
    .doc("NypokvoBI5qqUUZGaJb7")
    .update({
        Genres: firebase.firestore.FieldValue.arrayRemove("Narrative")
    })
    .then(() => {
        console.log("Uspesno ste obrisali zanr");
    })
    .catch(() => {
        console.log("Javila se greska");
    })


db.collection("movies")
    .doc("movieOne")
    .update({
        "Director.Name": "John",
        "Director.Surname": "Ford"
    })
    .then(() => {
        console.log("Uspesno ste izmenili ime/prezime reziseru");
    })
    .catch(() => {
        console.log("Javila se greska");
    })