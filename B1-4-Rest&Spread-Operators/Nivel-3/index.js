function explicarSemaforo(a, b, c) {
    console.log('rojo:', a, 'amarillo:', b, 'verde:', c);
}

let miArray = ['peligro,', 'precaución,', 'avance.'];
document.getElementById('semaforo').addEventListener('click', function() {
    explicarSemaforo(...miArray);
});