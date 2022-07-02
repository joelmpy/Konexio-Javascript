var request = require("request");

let countriesNames = [];

let country1 =  "https://restcountries.com/v3.1/all";

request.get(country1, function (err, res, body) {
   if(err){
       console.log(err);
       return err;
   }

   let country = JSON.parse(body);

//    console.log(country)
//    console.log(countriesNames);

   for(let i = 0; i < country.length; i++){
    countriesNames.push(country[i].name.common);
   
   }
   console.log(countriesNames);
});


/* 02 */ 

let getFact = "https://api.chucknorris.io/jokes/random";


request.get(getFact, function (err, res, body) {
    if(err){
        console.log(err);
        return err;
    }

    let checkNorris = JSON.parse(body);
    console.log(checkNorris.value);

});

getFact();

/* 03 */ 

let catchPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";

function getpokemon(number){

request.get(catchPokemon, function (err, res, body) {
    if(err){
        console.log(err);
        return err;
    }

    let pokemon = JSON.parse(body);
    console.log(pokemon.results[number].name);

})
}
getpokemon(2)