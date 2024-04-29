function semaforo(a, b, c) {
    console.log('rojo:', a, 'amarillo:', b, 'verde:', c);
}

let miArray = ['peligro,', 'precaución,', 'avance.'];
document.getElementById('semaforo').addEventListener('click', function() {
    semaforo(...miArray);
});