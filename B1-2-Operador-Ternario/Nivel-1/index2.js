function compararNumeros() {
    let num3 = parseFloat(document.getElementById('num3').value);
    let num4 = parseFloat(document.getElementById('num4').value);
    let compare = num3 > num4 ? num3 : num4;
    let resultado = `El ${compare} es mayor`;
    document.getElementById('resultado2').innerText = 'resultado: ' + resultado;
}

document.getElementById('comparar').addEventListener('click', compararNumeros);