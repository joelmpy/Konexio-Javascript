
let cat = { name: "Garfield", age: 3, isCute: true };

console.log(cat);
console.log(cat.age);
console.log(cat["age"]);

if (cat.isCute === true) {
  console.log("So cute !");
} else {
  console.log("not cute");
}

/* 02 */

let cat2 = { name: "Grosminet", age: 10, isCute: false };
let cats = [cat2, cat];

console.log(cats[0].name);
console.log(cats[1].isCute);

console.log(cats[1]["age"]);
console.log(cats[1]["isCute"]);

/* 3 */

function cheikIfeven(num) {
  if (num % 2=== 0 ) {
    console.log("even");
  }
  else{console.log("odd")
}
}

let numbers = [2, 18, 17, 248, 300];

for(let i = 0; i < numbers.length; i++){
  console.log('numbers testé -->', numbers[i]);
  cheikIfeven(numbers[i]);
}



/* 4 */ 

function compare (num1, num2){

if(num1 > num2){
    console.log("Num1 is bigger");
}
else if (num1 < num2){
    console.log(" Num2 is bigger monster");
}
else if (num1 === num2){ 
  console.log("egalité both are the same");
}
else{console.log('Error something happened');
}

}

let numbers1 = [2, 18, 17, 248, 300];

for(let i = 0; i < numbers1.length; i++){
  console.log('first number -->' , numbers1[i]);

  for(let j = 0; j < numbers1.length; j++){
    compare(numbers1[i], numbers1[j]);
  }
}


/* 05 */ 



function addup(num){
    var total = 0;
    for(var i = 0; i <= num; i++){
        total = total + i;
    }
    console.log(total)
}

addup(12);

/* 06 */ 

function format (num){
  var hours = 0; 
  var minutes = 0;
  var secondes = 0; 


    var hours = Math.floor(num / 3600);
    var minutes = Math.floor ((hours * 3600/60));
    var seconde = num-hours*3600-minutes*60

    
    console.log('Il fait', hours, 'H', minutes, 'min', seconde, 'sec',)
}

format(3700);