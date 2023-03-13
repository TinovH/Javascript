let text = ""; 
const Verlanglijst = ["Camera", "Draadloze Oortjes", "Videokaart", "Processor", "ND Filters"];


for (let i = 0; i <= Verlanglijst.length -1; i++) {
    text += Verlanglijst[i] + "<br>";
}

document.getElementById("one").innerHTML = text;


//document.getElementById("two").innerText = "Op je verlanglijst staat: " + Verlanglijst.join(", ");