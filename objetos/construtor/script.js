// const img = document.querySelector("img");

// com função anonima

// img.addEventListener("click", () => {
// 	console.log("clicou");
// });

// Função separada

// function callback() {
// 	console.log("clicou");
// }

// img.addEventListener("click", callback);

// Event
// function callback(event) {
// 	console.log(event);
// }

// img.addEventListener("click", callback);

// Exercicio 1
// nao funcionou...
// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function handleLink(event) {
// 	event.preventDefault();
// 	this.classList.toogle("ativo");
// }

// linksInternos.forEach(link => {
// 	link.addEventListener("click", handleLink);
// });

//exercicio 2
//retornando todos os elementos do site
// const tdsElementos = document.querySelectorAll("*");
// console.log(tdsElementos);

//que estão dentro de body e remover
const tdsElementos = document.querySelectorAll("body *");

function handleElemento(event) {
	console.log(event.currentTarget); //para mostrar
	//console.log(event.currentTarget.remove()); //para remover
}

tdsElementos.forEach(element => {
	element.addEventListener("click", handleElemento);
});

//exercicio 3

function handleClickT(event) {
	if (event.key === "t") {
		document.documentElement.classList.toggle("textoMaior"); //adiciona a classe que foi adicionada ao documento css e aumenta as letras da párgina
	}
}

window.addEventListener("keydown", handleClickT);
