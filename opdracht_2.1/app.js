var move = 0;
var reverse = false;

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
    document.getElementById("div").style.left = move + "px";
}, 100);