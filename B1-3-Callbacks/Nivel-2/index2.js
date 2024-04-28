function procesarElements(array, callback) {
    array.forEach(callback);
}
document.getElementById('procesarButton').addEventListener('click', () => {
    procesarElements([1, 2, 3, 4, 5], elemento =>
        console.log('Procesando elemento: ' + elemento));
        });