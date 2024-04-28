const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 100);
    document.getElementById('random').innerHTML = 'Número aleatorio: ' + randomNumber;
};

document.getElementById('randomButton').addEventListener('click', generateRandomNumber);