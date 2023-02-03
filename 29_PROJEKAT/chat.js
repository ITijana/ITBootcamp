export class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection("chats");
        this.unsub;
    }

    set room(r) {
        this._room = r;
    }

    set username(u) {
        u = u.trim();
        if (u.length > 1 && u.length < 11 && u !== "") {
            this._username = u;
        }
        else {
            this._username = "Error";
            window.alert("Incorrect username!")
        }
    }

    get room() {
        return this._room;
    }

    get username() {
        return this._username;
    }

    updateRoom(ur) {
        this.room = ur;
        if (this.unsub) {
            this.unsub();
        }
    }

    async addChat(messages) {
        let date = new Date();
        let document = {
            message: messages,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };

        let response = await this.chats.add(document);
        return response;
    }

    getChats(callback) {
        this.unsub = this.chats
            .orderBy("created_at")
            .where("room", "==", this.room)
            .onSnapshot(snapshot => {
                let change = snapshot.docChanges();
                change.forEach(changes => {
                    if (changes.type == "added") {
                        //console.log(changes.doc.data());
                        callback(changes.doc.data());
                    }
                });
            });
    }
}
