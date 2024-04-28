function calculadora(num1, num2, callback) {
    return callback(num1, num2);
}

document.getElementById('calculateButton').addEventListener('click', () => {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let suma = calculadora(num1, num2, function(a, b) {
        return a + b;
    });
    console.log(`Resultado= ${suma}`);
});