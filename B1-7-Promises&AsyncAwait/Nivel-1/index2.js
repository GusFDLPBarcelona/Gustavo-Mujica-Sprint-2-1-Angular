document.getElementById('btnPromesa').addEventListener('click', () => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola, mundo!');
        }, 2000);
    });

    promesa.then((value) => {
        console.log(value);
        document.getElementById("Promesa2").innerHTML = value;
    });

    console.log(promesa);
});