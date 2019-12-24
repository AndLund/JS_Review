# Estudos Javascript

## Construtor

-Objeto
ex:

const carro = {
marca: 'marca',
preco: 0
}

-Construtor

function Carro(marca1,preco1) { //primeira letra maiuscula
this.marca = marca1; //this faz referencia ao próprio objeto construído
this.preco = preco1;
}

const honda = new Carro(marca,preco);
const fiat = new Carro(marca,preco);
