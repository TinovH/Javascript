let text = "";

/*
for (let i = 0; i <= 100; i++) {
    text += i + "<br>";
}
*/

for (let i = 100; i >= 0; i--) {
    text += i + "<br>";
}

document.getElementById("div").innerHTML = text;
