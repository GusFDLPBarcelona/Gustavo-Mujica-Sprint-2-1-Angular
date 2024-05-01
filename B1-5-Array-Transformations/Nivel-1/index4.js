document.getElementById('botonSuma').addEventListener('click', calcularSuma);

function calcularSuma() {
    const arrayNumeros = [13, 7, 8, 21];
    console.log("El total de la suma de los elementos del array es: " + arrayNumeros.reduce((acumulador, num) => acumulador + num, 0));
}