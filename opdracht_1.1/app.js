const winkelmand = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen", "drop"];
winkelmand[1] = "Bier";
winkelmand.sort();

setTimeout(function() {
    winkelmand.splice(0, 2);
    document.getElementById("two").innerText = "Uw producten zijn: " + winkelmand.join(", ");
    console.log(winkelmand);
}, 1000);

const product_toevoegen = function () {
    winkelmand.push("Nootjes");
    document.getElementById("two").innerText = "Uw producten zijn: " + winkelmand.join(", ");
}

if (winkelmand[5] == ('drop')) {
    if (winkelmand <= 0) {
        document.getElementById("one").innerText = "U heeft niet genoeg producten om te tonen";
    } else {
        document.getElementById("one").innerText = "Er zitten " + winkelmand.length + " producten in uw winkelmand";
        document.getElementById("two").innerText = "Uw producten zijn: " + winkelmand.join(", ");
        document.getElementById("three").innerText = winkelmand[3] + ", staat op de vierde plek in uw winkelmand";
    }
} else {
    document.getElementById("four").innerText = "u heeft geen drop";
}