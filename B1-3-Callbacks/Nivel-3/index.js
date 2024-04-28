function procesarCadena(cadena, callback) {
    var cadenaEnMayusculas = cadena.toUpperCase();
    callback(cadenaEnMayusculas);
}

document.getElementById('transformarButton').addEventListener('click', function() {
    procesarCadena('La rana Gustavo mola mazo', function(cadenaTransformada) {
        console.log('Cadena transformada: ' + cadenaTransformada);
    });
});