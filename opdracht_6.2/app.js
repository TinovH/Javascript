


window.onload = function() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d"); 
    let img = new Image();
    img.src = "./F1.jpg";
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth;



    var move = 0;
    var reverse = false;

    setInterval(function()  {
    
        if (reverse == false) {
            move += 10;
        } else {
            move -= 10;
        }
    
        if (move >= (window.innerWidth - 200)) {
            reverse = true;
        }
        if (move <= 0) {
            reverse = false;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, move, 0, 180, 100);
    }, 100);
};

