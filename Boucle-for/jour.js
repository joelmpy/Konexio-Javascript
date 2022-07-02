/* 01 */

let min = 5;
let limit = 10;
var total = 0;

for (var i = 5; i <= limit; i++) {
  min = i * i;
  total = min + total;
}
console.log("le carré d'un nombre est sa valeur", total);

/* 02 */

let max = 1000;
let nombre = 100;
let totale = 0;

for (var i = nombre; i <= max; i++) {
  if (i % 7 === 0) {
    totale = totale + 1;
  }
}
console.log("Mon chiffire totale est", totale);

/* 03 */

let dé = 20;
var somme = 6;
var somme1 = 1;
let dicesSum = 0;

for (var i = 0; i <= dé; i++) {
  var lancerD = Math.floor(Math.random() * (somme - somme1 + 1) + somme1);

  if (lancerD >= 5) {
    dicesSum = dicesSum + lancerD;
  }
}
console.log("Gagner vous avez fait", dicesSum);


/* 04 */

let my = ["Didier", "Greg", "Anais", "George"];

for (var i = my.length - 1; i >= 0; i--) {
  let eleve = my[i];
  console.log("Bonjour a tous", eleve);
}

/* 05 */

let classe = [
  {
    nom: "Marion",
    moyenne: 18,
  },
  {
    nom: "Joel",
    moyenne: 8,
  },
  {
    nom: "Jeff",
    moyenne: 4,
  },
  {
    nom: "Rodrigue",
    moyenne: 15,
  },
];

for (let i = 0; i < classe.length; i++) {

  
  let eleves = classe[i];

  if (classe[i].moyenne < 10) {
    console.log(eleves.nom + " n'a pas la moyenne" )
    
  }else{
    console.log(eleves.nom + " a la moyenne" );
  }
}
