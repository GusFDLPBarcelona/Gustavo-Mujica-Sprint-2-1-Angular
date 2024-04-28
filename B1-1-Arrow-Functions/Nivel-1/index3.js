class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar = () => {
        console.log(`Hola, ${this.nombre}`);
    }
}

document.getElementById('btnSaludar').addEventListener('click', () => {
    let nombre = document.getElementById('nombrePersona').value;
    let persona = new Persona(nombre);
    persona.saludar();
});