// var videoGames = ["PS4", "XBOX", "SWITCH"];

// videoGames.forEach(function(item) {
// 	console.log(item);
// });

// var videoGames = ["PS4", "XBOX", "SWITCH"];

// videoGames.forEach(item => {
// 	console.log(item);
// });

// EXERCICIO

var copa = [1959, 1962, 1970, 1994, 2002];

copa.forEach(ano => {
	console.log(`O Brasil ganhou a copa de ${ano}`);
});

var frutas = ["banana", "maçã", "pera", "uva", "melancia"];

for (var f = 0; f < frutas.length; f++) {
	console.log(frutas[f]);
	if (frutas[f] === "pera") break;
}

var ultima = frutas[frutas.length - 1];
console.log(ultima);
