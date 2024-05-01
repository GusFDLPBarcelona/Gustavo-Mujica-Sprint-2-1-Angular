       function findNumber() {
            const numeros = [1, 10, 8, 11];
            const mayor10 = numeros.find(numero => numero > 10);
           
            console.log(numeros, "El número > 10 es: " + mayor10);
           
        }