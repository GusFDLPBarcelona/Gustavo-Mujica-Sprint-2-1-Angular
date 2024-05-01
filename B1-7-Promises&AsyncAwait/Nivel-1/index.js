const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hola, mundo!');
    }, 2000);
  });
  
  promesa.then((valor) => {
    console.log(valor);   
  });
  