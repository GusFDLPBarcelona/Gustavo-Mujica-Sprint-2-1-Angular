function imprimirLoop() {
    const arr = [1,2,3,4,5];
    const printNumbers = () => {
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    printNumbers();
}
document.getElementById('btn').addEventListener('click', imprimirLoop);