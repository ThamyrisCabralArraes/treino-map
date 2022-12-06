const converter = (elemento) => {
  return parseInt(elemento);
};

let numString = ['1', '2', '3', '4'];
let num = numString.map(converter);
console.log(num);

//

const dobrar = (elemento) => {
  return elemento * 2;
};

let dobrado = ['1', '2', '3', '4'];
let dobrado2 = dobrado.map(dobrar);
console.log(dobrado2);

//

let listaArray = [
  'sdfmndlskfnmj@gmail.com',
  'vbfdghbfgh@gmail.com',
  'nmfghnfsdgf@gmail.com',
  'asdfgsdgfdg@gmail.com',
  'khjlkjhlkhj@gmail.com',
];

let listaObjeto = listaArray.map((email) => {
  return {
    email: email,
    nota: `a definir`,
  };
});
console.log(listaObjeto);
