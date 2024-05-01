function resolverDespuesDeDosSegundos() {
    return new Promise((cumplir) => {
      setTimeout(() => {
        cumplir('Hola, mundo!');
      }, 2000);
    });
}

async function llamadaAsincrona() {
    try {
        console.log('Llamada en curso...');
        const resultado = await resolverDespuesDeDosSegundos();
        console.log(resultado);
    } catch (error) {
        console.error('Ha ocurrido un error:', error);
    }
}

document.getElementById('iniciar').addEventListener('click', llamadaAsincrona);