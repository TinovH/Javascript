var move = 0;
var reverse = false;
var div = document.getElementById("div");
const colors = ["blue", "red", "green", "orange", "yellow"];

const color = function() {
    div.style.background = colors[Math.floor(Math.random() * 6)];
}

setInterval(function()  {
    
    if (reverse == false) {
        move += 10;
    } else {
        move -= 10;
    }

    if (move >= (window.innerWidth - 54)) {
        reverse = true;
    }
    if (move <= 0) {
        reverse = false;
    }
    div.style.left = move + "px";
}, 100);

div.addEventListener("click", color);