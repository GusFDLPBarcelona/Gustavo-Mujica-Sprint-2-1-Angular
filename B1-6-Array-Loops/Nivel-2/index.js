let obj = { nombre: 'Graciela', edad: 34, ciudad: 'Buenos Aires' };

document.getElementById("imprimirForIn").addEventListener("click", function() {
    for (let clave in obj) {
        console.log(clave + ': ' + obj[clave]);
    }
});