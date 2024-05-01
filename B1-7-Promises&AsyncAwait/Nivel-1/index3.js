function crearPromesa(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola!') {
                resolve('La promesa se ha resuelto');
            } else {
                reject('La promesa ha sido rechazada');
            }
        }, 2000);
    });
}

document.getElementById('btnPromesa2').addEventListener('click', () => {
    const input = document.getElementById('inputPromesa').value;
    crearPromesa(input)
        .then(valor => {
            console.log(valor);
            document.getElementById("Promesa3").innerHTML = valor;
        })
});