function esperarSaludar(nombre, callback) {
    setTimeout(function() {
        callback(nombre);
    }, 2000);
}

document.getElementById('saludarButton').addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    esperarSaludar(nombre, function(nombre) {
        console.log('Hola ' + nombre);
    });
});


