let noms = ['Carina', 'Betty', 'Edgar'];

document.getElementById("imprimirForOfIndex").addEventListener("click", function() {
    for (let [index, nom] of noms.entries()) {
        console.log(`Elemento ${index}: ${nom}`);
    }
});