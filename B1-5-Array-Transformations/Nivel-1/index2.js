function filterArray() {
    const arrayCompleto = [1, 2, 3, 4, 5, 6];
    const arrayPares = arrayCompleto.filter(num => num % 2 === 0);
    console.log(arrayPares);
}