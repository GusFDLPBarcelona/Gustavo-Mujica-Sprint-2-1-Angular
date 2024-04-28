function puedeConducir() {
    const edad = document.getElementById('edad').value;
    const resultado = edad >= 18 ? 'Puedes conducir' : 'Aún no puedes conducir';
    document.getElementById('resultado').innerText = 'Comprobado: ' + resultado;
}

document.getElementById('comprobar').addEventListener('click', puedeConducir);