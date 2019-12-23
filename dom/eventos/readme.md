# Estudos Javascript

## Transversing e Manipulacao

- outerHTML, innerHTML, innerText
  São propriedades que retornam uma string contendo HTML ou texto. Permitem atribuir um novo valor para as mesmas.
  ex:
  element.innerText = 'alterar o texto original'

  ex2:
  const menu = document.querySelector('.menu');

  menu.outerHTML; //retorna todo o HTML do elemento
  menu.innerHTML; //retorna todo o HTML interno
  menu.innerText; //retorna o texto sem tags

-Transversing
Navega pelo DOM através de suas propriedades e métodos.
Desta forma pode-se descobrir quem são as tags pais e filhas.
ex:
const lista = document.querySelector('.animais-lista');
lista.parentElement //pai
lista.parentElement.parentElement //pai do pai
lista.previousElementSibling //elemento acima
lista.nextElementSibling //elemento abaixo
lista.children //HTMLCollection com todos os filhos
lista.children[0] // primeiro filho
lista.children[--lista.children.length] //ultimo filho
(da pra usar o querySelector('li:last-child'), por exemplo, para pegar o ultimo filho)

-Manipulando Elementos
É possível mover elementos no DOM com métodos de Node.
ex:
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = document.querySelector('.titulo');

contato.appendChild(lista) //move lista para o final do contato
contato.insertBefore(lista, titulo) //insere a lista antes de tudo
contato.removeChild(titulo) //remove titulo de contato
contato.replaceChild(lista, titulo) //substitui titulo por lista

-Criação de Novos Elementos
ex:
const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo titulo';
novoH1.classList.add('.titulo');
novoH1.appendChild(novoH1);

-Para clonar elementos
ex:
const titulo = document.querySelector('h1');
const clone = titulo.cloneNode(true); //true para incluir os filhos, false para clonar so a tag sem os filhos
