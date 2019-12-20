# Estudos Javascript

## DOM

-É possível encontrar os elementos através de comandos document.getElements...:
ById, ByTagName, ByClassName...

-Porém o document.querySelector (pega o primeiro elemento) e o document.querySelectorAll (pega todos os elementos) funcionam utilizando a notação do CSS (. , #), então:
ex:
document.querySelector('h1');
document.querySelector('.container');
document.querySelector('#vermelho');

OBS:
getElementBy... - retorna uma HTMLCollection
querySelectorAll - retorna uma NodeList

HTMLCollection vs NodeList - possuem propriedades e métodos diferentes.

Quando se tenta adicionar uma nova classe, por exemplo:
HTMLCollection atualiza instantaneamente.
NodeList não é atualizada na hora.

HTMLCollection e NodeList são array-like, ou seja, é possível usar propriedades de array para navegar pelos itens. O NodeList pode usar direto, o HTMLCollection deve ser convertida para array primeiro:
ex:
var convArray = Array.from(gridSectionHTML)

Array.from() vai converter a HTMLCollection em uma array e a partir desse momento é possível utilizar as propriedades de Array.
