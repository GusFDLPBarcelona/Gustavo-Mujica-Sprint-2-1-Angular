function suma(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

document.getElementById('sumarButton').addEventListener('click', function() {
    let resultado = suma(1, 2, 3, 4);
    console.log(resultado);
});