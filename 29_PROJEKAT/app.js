import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.querySelector("ul");
let btnSend = document.getElementById("send");
let inpMess = document.getElementById("inpMessage");
let inpUser = document.getElementById("inpUsername");
let btnUpdate = document.getElementById("update");
let navBtn = document.getElementById("navs");
let btnList = navBtn.getElementsByTagName("button");

let username = "Anonymous";
if (localStorage.username) {
    username = localStorage.username;
}

let chatroom = new Chatroom("#js", username);
let chatUI1 = new ChatUI(ul);

chatroom.getChats(data => {
    chatUI1.templateLI(data);
});

btnSend.addEventListener("click", e => {
    e.preventDefault();
    let mess = inpMess.value.trim();
    if (!mess) {
        console.log("ERROR");
        return;
    }
    chatroom.addChat(mess)
        .then(() => {
            inpMess.value = "";
        })
        .catch(err => {
            console.log(err);
        });
});

btnUpdate.addEventListener("click", e => {
    e.preventDefault();
    let username = inpUser.value.trim();
    if (username !== "" && username.length > 1 && username.length < 11) {
        chatroom.username = username;
        btnSend.disabled = false;
        document.getElementById("display").innerHTML = username;
        localStorage.setItem("username", chatroom.username);
        setTimeout(function () {
            location.reload();
            document.getElementById("display").innerHTML = "";
        }, 3000);
    }
    else {
        btnSend.disabled = true;
        window.alert("This username is not valid!");
    }
    inpUser.value = "";

});

navBtn.addEventListener("click", e => {
    if (e.target.tagName == "BUTTON") {
        let newRoom = e.target.textContent;
        chatroom.updateRoom(newRoom);
        chatUI1.clearUl();
        chatroom.getChats(data => {
            chatUI1.templateLI(data);
        });
        for (let i = 0; i < btnList.length; i++) {
            if (btnList[i] == e.target) {
                btnList[i].className = "active";
            }
            else {
                btnList[i].className = "";
            }
        }
    }
});
