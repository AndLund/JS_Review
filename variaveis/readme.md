# Estudos Javascript

## Variáveis

- Formas de declaração de uma variável
  var, let, const

Para fazer uso do javascript deve-se criar um arquivo .js
script.js (exemplo)

E no HTML, dentro do body, deve-se usar a tag script e linkar com o doc .js:

<script src="script.js"></script>

Desta forma tudo pode ser visualizado na aba console dentro das ferramentas do desenvolvedor.

- Saber tipo de uma variavel:
  console.log(typeof name);
  typeof seguido do nome da variável retorna o tipo dela.

- Concatenar string
  var nome = "and "
  var sobrenome = "hol"
  console.log(nome + sobrenome); (Igual ao java)
  saida: and hol

-Template string
Variáveis e Expressões são passadas dentro de \${}.
ex:
var gols = 1000;
var frase = `Romario fez ${gols} gols` (expressao entre crases)
eh possivel tambem: var frase = `Romario fez ${gols * 2} gols`

-Expoente
2^5 = 2 \*\* 5 (em js)

-Converter string em numero
var idade = '33'
console.log(+idade) ou (-idade) (converte em positivo e negativo, respectivamente)
ou
var idade = +'33'
