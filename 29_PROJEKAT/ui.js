export class ChatUI {
    constructor(l) {
        this.list = l;
    }

    set list(l) {
        this._list = l;
    }

    get list() {
        return this._list;
    }

    dateTime(data) {
        let date = data.created_at.toDate();
        let day = String(date.getDate()).padStart(2, "0");
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let year = date.getFullYear();
        let hour = String(date.getHours()).padStart(2, "0");
        let min = String(date.getMinutes()).padStart(2, "0");

        let timeToday = `${hour}:${min}`;
        let timeDate = `${day}.${month}.${year}-${hour}:${min}`;

        let today = new Date();

        if (date.toDateString() == today.toDateString()) {
            return timeToday;
        }
        else {
            return timeDate;
        }
    }

    templateLI(data) {
        let timeDate = this.dateTime(data);
        let messages;
        if (data.username == localStorage.username) {
            messages =
                `
                <li class="right">
                    <span class="username">${data.username}: </span>
                    <span class="message">${data.message}</span>
                    <div class="date">${timeDate}</div>
                </li>
                <div></div>`;
        }
        else {
            messages =
                `
                <li>
                    <span class="username">${data.username}: </span>
                    <span class="message">${data.message}</span>
                    <div class="date">${timeDate}</div>
                </li>
                <div></div>`;
        }
        // return messages;
        this.list.innerHTML += messages;
    }

    clearUl() {
        this.list.innerHTML = "";
    }

}

