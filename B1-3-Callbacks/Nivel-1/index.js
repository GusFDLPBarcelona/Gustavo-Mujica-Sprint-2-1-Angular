function processar(numero, callback) {
    callback(numero);
}

document.getElementById('rellamada').addEventListener('click', function() {
    let numero = 6683786714;
    processar(numero, function(num) {
        document.getElementById('mensaje').textContent = 'Rellamando al número ' + num;
    });
});