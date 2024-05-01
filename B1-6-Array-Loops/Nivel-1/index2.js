let noms = ['Bernardino', 'Delia', 'Hugo'];

document.getElementById("imprimirForOf").addEventListener("click", function() {
    for (let nombre of noms) {
        console.log(nombre);
    }
});