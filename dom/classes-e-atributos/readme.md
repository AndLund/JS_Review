# Estudos Javascript

## Dimensões e Distâncias

-Dimensões Height e Width
São propriedades dos objetos Element e HTMLElement.

Ex.:
const section = document.querySelector('.animais');

Retorna Height e Padding:
section.clientHeight

Retorna Height, Padding e Border:
section.offsetHeight
section.offsetTop, .offsetLeft...

Retorna Height total mesmo com o scroll:
section.scrollHeight

O mesmos funciona para "width".

-Dimensões totais
Retorna todos os valores relacionados a dimensões e distâncias.

const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height
rect.width
rect.top

-Associados a janela (window)

window.innerWidth
window.outerWidth
window.innerHeight
window.outerHeight
window.pageYOffset (scroll)
window.pageXOffset
window.matchmedia('(max-width: 600px)') (verifica se é true ou false mostrado no atributo "matches", é como o mediaquery)
