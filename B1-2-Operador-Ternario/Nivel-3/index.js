function parOImpar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        let mensaje = numeros[i] % 2 === 0 ? ' es par' : ' es impar';
        console.log(numeros[i] + mensaje);
    }
}

document.getElementById('iniciar').addEventListener('click', function() {
    parOImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});