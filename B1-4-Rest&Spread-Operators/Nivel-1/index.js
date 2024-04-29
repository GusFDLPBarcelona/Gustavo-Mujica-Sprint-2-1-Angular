document.getElementById('operarButton').addEventListener('click', function() {
    let array1 = [1, 3, 5];
    let array2 = [2, 4, 6];
    console.log(array1, array2);
    let array3 = [...array1, ...array2];

    console.log(array3); 
});

