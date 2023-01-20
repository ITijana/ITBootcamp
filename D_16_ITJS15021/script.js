let inputText = document.getElementById("text");
let ulTask = document.querySelector("ul");
let radio1 = document.getElementById("radioOne");

let niz = JSON.parse(localStorage.getItem("niz"));

if(niz == undefined) {
    let noviNiz = [];
    localStorage.setItem("niz", JSON.stringify(noviNiz));
}

inputText.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        let inpText = inputText.value;
        let text = document.createElement("li");
        text.innerHTML = inpText;
        inputText.value = "";
        if (inpText == "") {
            text.style.display = "none";
        }
        if (radio1.checked) {
            ulTask.prepend(text);
            niz.unshift(inpText);
        }
        else {
            ulTask.append(text);
            niz.push(inpText);
        }
    }
    localStorage.setItem("niz", JSON.stringify(niz));
});

ulTask.addEventListener("click", e => {
    if (e.target.tagName == "LI") {
        let v = e.target.innerHTML;
        niz = niz.filter(item => item !== v);
        localStorage.setItem("niz", JSON.stringify(niz));
        e.target.remove();
    }
});