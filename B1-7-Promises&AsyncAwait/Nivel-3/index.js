async function resolverPromesas() {
    const resultados = await Promise.all([
        new Promise((resolver) => setTimeout(() => resolver('Hola,'), 2000)),
        new Promise((resolver) => setTimeout(() => resolver('Mundo!'), 3000))
    ]);
    console.log(resultados.join(' '));
}

document.getElementById('iniciar').addEventListener('click', resolverPromesas);