let btn = document.getElementById("start");
let output = document.getElementById("output");


let start;
let end;
let reaction;



function startTime() {
    start = Date.now();
}

function startGame() {
    btn.style.display = "none";
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "green";
        startTime();
    }, Math.floor(Math.random() * 9 + 1) * 1000 );
}

function stopTimer() {
    if(document.body.style.backgroundColor == "red") return;
    end = Date.now();
    reaction = end - start;
    output.innerText = reaction + " ms";
    document.body.style.backgroundColor = "#2b87d1";
    btn.style.display = "block";
}