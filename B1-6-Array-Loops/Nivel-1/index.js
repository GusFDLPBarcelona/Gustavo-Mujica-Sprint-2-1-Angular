let nombres = ['Nando', 'Jose Luis', 'Luisa'];

document.getElementById("imprimirForEach").addEventListener("click", function() {
    nombres.forEach(nombre => console.log(nombre));
});