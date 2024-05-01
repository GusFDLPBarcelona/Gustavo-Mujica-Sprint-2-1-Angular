let numeros = [1, 2, 3, 4, 5, 6];

document.getElementById("imprimirForOfBreak").addEventListener("click", function () {
  
    for (let num of numeros) {
        if (num === 5) {
            break;
        }
        console.log(num);
    }
});