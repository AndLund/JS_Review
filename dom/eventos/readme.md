# Estudos Javascript

## Eventos

-addEventListener(param1,param2,param(opcional))
Adiciona uma função ao elemento (callback) e quando determinado evento ocorrer ativará esta função.
Possui três parametros mas o terceiro é opcional. Normalmente são utilizados os dois primeiros.

OBS: Uma boa prática é criar a função e chamá-la pelo nome dentro da addEventListener, no lugar de passar função anonima diretamente.

ex:
function callback() {
console.log('clicou');
}

img.addEventListener('click', callback);

- O primeiro parametro que é passado é o evento 'event'.
  Quando se passa o evento como parametro o console.log retorna um objeto com várias propriedades.

-Propriedades mais comuns de Event
.currentTarget (referente ao item que eu adicionei o evento)
.target (onde o clique ocorreu)
.type (tipo do evento)
.path
.preventDefault() (método)
.this (faz referencia ao elemento que foi adicionado como o .currentTarget)

-Eventos mais comuns
click, scroll,resize,keydown,keyup,mouseenter.
Obs: Eventos podem ser adicionados a document e window.
