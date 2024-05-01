function resolverDespuesDeDosSegundos() {
    return new Promise((cumplir) => {
      setTimeout(() => {
        cumplir('Hola, mundo!');
      }, 2000);
    });
}

async function llamadaAsincrona() {
    console.log('Llamada en curso...');
    const resultado = await resolverDespuesDeDosSegundos();
    console.log(resultado);
}

document.getElementById('miBoton').addEventListener('click', llamadaAsincrona);