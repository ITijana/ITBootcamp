let str = ``;
let red = 1;
for (i = 1; i <= 64; i++) {
    if(red % 2 != 0 && i % 2 == 0) {
        str += `
            <span class="color">${i}</span>
            `;
    }
    else if(red % 2 == 0 && i % 2 != 0) {
        str += `
            <span class="color">${i}</span>
            `;
    }
    else {
        str += `
            <span>${i}</span>
            `;
    }
    if(i % 8 == 0) {
        str += `<br><br>`;
        red++;
    }
} 
document.write(str);
