

window.addEventListener("load", function () { 
    const canvas = document.querySelector("canvas");

    //context 
    const ctx = canvas.getContext("2d"); 
    //hoogte en breedte van browser
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth;

    //functions
    let painting = false; 

    function startPosition(e) { 
        painting = true; 
        console.log("im painting");
        draw(e);
    }; 

    function finishedPosition() { 
        painting = false; 
        ctx.beginPath();
        console.log("im done painting");
    };

    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
        console.log(e);
    };


    //mouse
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
})