var output = document.getElementById("output");
var input = document.getElementById("input");

const shop = [];

const add_product = function() {
    var product = input.value;
    shop.push(product);
    output.innerText = shop.join(", ");
}