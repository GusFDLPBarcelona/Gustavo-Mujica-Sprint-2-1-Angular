document.getElementById('destructuring').addEventListener('click', function () {

    let [primero, segundo, ...resto] = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

    console.log('primero:', primero, 'segundo:', segundo, 'resto:', resto);
});