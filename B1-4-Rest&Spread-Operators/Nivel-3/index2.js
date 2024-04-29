let objeto1 = {
    Calle: 'Bilbao',
    Número: '18'
};

let objeto2 = {
    Piso: '5',
    Puerta: '2'
};

document.getElementById('Fusionar').addEventListener('click', function() {
    let objetoFusionado = {...objeto1, ...objeto2};
    console.log(objeto1, objeto2, objetoFusionado);
});