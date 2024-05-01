const FiltrDuplSum = arr => arr.reduce((a, c) => c >= 10 ? a + c * 2 : a, 0);

document.getElementById("Iniciar").addEventListener("click", function() {
    const array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
    const resultado = FiltrDuplSum(array);
    console.log(`El array filtrado, duplicado y sumado da como resultado: ${resultado}`);
});