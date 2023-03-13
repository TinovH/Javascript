var div = document.getElementById("div");
var moveh = 0;
var movev = 0;


document.addEventListener('keydown', press)
function press(e) {
    //left
    if (e.keyCode === 37 || e.keyCode === 65) {
        moveh -= 10;
        div.style.left = moveh + "px";
    }
    //up
    if (e.keyCode === 38 || e.keyCode === 87) {
        movev -= 10;
        div.style.top = movev + "px";
    }
    //right
    if (e.keyCode === 39 || e.keyCode === 68) {
        moveh += 10;
        div.style.left = moveh + "px";
    }
    //down
    if (e.keyCode === 40 || e.keyCode === 83) {
        movev += 10;
        div.style.top = movev + "px";
    }
}