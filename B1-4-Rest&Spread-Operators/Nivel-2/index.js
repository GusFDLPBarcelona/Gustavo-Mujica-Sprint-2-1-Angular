let objeto1 = {
    nombre: 'Rana Gustavo',
    edad: 40
};

document.getElementById('Copy&Change').addEventListener('click', function() {
    let objeto2 = {...objeto1};

    objeto2.nombre = 'Animal';

    console.log('objeto1:', objeto1);
    console.log('objeto2:', objeto2);
});