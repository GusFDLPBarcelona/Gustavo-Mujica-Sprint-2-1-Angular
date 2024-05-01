let numeros = [1, 2, 3, 4, 5, 6];

document.getElementById('imprimirPares').addEventListener('click', () => {

    let numerosPares = numeros.filter(numero => numero % 2 === 0);

    console.log(numerosPares);
});