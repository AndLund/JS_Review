# Estudos Javascript

## DOM

-forEach
como visto anteriormente é uma propriedade de array então NodeList podem usar e para usar com HTMLCollection (resultado de uma document.getElements...) tem que converter o mesmo para uma array:
ex:
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach((item) => {
console.log(item);
});

-Arrow function

É a mesma função anonima porem sem o nome "function" e com uma "=>" após os parametros.

titulosArray.forEach((item) => {
console.log(item);
});
