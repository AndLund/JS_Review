# Estudos Javascript

## Objeto

ex:

var pessoa = {
nome: 'And',
sobrenome: 'hol'
idade: 33
}

- É possível usar funções dentro de objetos:
  var quadrado = {
  lado: 4,
  perimetro(l){
  return l*4;
  },
  area(l){
  return l*l;
  }
  }

- Para ter acesso a esses dados:
  ex: console.log(pessoa.nome)

Obs: console.table(pessoa)
Mostra as informações do objeto em forma de tabela.

- THIS
  this. - se refere ao objeto.

OBS: TUDO É OBJETO NO JS.
