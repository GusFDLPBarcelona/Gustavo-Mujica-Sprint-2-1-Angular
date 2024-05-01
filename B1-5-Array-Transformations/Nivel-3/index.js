const array = [11, 12, 13, 14];

document.getElementById("verificar").addEventListener("click", function() {
    
    const todosMayores = array.every(elemento => elemento > 10);
    console.log("¿Todos los elementos son mayores que 10?", todosMayores);
    
    const algunosMayores = array.some(elemento => elemento > 10);
    console.log("¿Algunos elementos son mayores que 10?", algunosMayores);
});