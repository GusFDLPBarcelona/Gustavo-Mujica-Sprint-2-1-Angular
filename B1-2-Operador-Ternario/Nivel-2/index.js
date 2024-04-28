function siEsCero(numX) {
    return numX > 0 ? 'positivo' : numX < 0 ? 'negativo' : 'cero';
}

document.getElementById('comprobar').addEventListener('click', function() {
    let numX = parseFloat(document.getElementById('numero').value);
    let resultado = siEsCero(numX);
    document.getElementById('resultado').innerText = 'El número es: ' + resultado;
});


document.getElementById('encontrar').addEventListener('click', function () {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);
    let encontrarMaximo = (num1 > num2 && num1 > num3) ? num1 : (num3 > num2) ? num3 : num2;
    document.getElementById('respuesta').innerText = 'El número máximo es: ' + encontrarMaximo;
});