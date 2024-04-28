const imprimirMensaje = () => {
    const mensaje = document.getElementById('mensaje').value;
    setTimeout(() => {
        console.log(mensaje);
    }, 3000);
}

document.getElementById('btn').addEventListener('click', imprimirMensaje);