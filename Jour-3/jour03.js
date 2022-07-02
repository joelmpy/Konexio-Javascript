

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits)
console.table(fruits)

/* 02 */ 

var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf('butter'));

/* 03 */ 

var objects = ["pen", "book" , "lamp"];
objects.unshift("chair");
console.log(objects);

objects.pop()
console.log(objects);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

/* 04 */ 

var numbers = [ 4, 10, 8, 12 , 6];
numbers.reverse();
console.log(numbers);

numbers.sort((a, b) => a - b); 
console.log(numbers);


/* 05 */ 

var total = 0;
var limit = 10; 

for (var i = 0; i <= limit; i++){
    total = total + i;
}
console.log(total);


/* 06 */

var sentence = "Hello Konexio!"; 
let result = "";

for(let i = sentence.length - 1; i >= 0; i--){
    console.log([i]);
    
 result = result + sentence[i]; 
}

console.log(result);