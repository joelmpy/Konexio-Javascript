/*Exercice 2 */

var integer = 102;
var float = 13.9;
console.log(integer, float);
/* 02 */

var basic = 34;
var stringified = basic.toString();
console.log(stringified);

/* 03 */

var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

/* 04 */
var test = 12;
var bis = 5;
console.log(test + bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);

/* 05 */

var test = 143;
var bis = 249;
console.log(test, '>=' === bis);
console.log(test < bis);
console.log(test > bis);
console.log(test !== bis);
console.log(test == bis);
console.log(test != bis);
console.log(test <= bis);
console.log(test >= bis);

/* 06 */

var limit = 90;
var score = 64;

if (score >= limit) {
  console.log("Ok good !");
} else {
  console.log("Oh nooo...");
}

if (score < limit) {
  console.log("Ok good !");
} else {
  console.log("Oh nooo...");
}

/* 07 */

var password = "azerty";

if (password.length > 5) {
  console.log("The password is secure");
} else {
  console.log("Non c'est rate");
}

/* 08 */

if (score >= limit && password.length >= 5) {
  console.log("Everything is good");
} else if (score >= limit || password.length >= 5) {
  console.log("Something is good");
}
 else {
  console.log("Nothing is good");
}

/* Bonus  

var random = 3;
var randoms = 6;
Math.floor(Math.random()) * (random - randoms + 1);



if(random >= 6 && random <= 6){
    console.log("Yes I win !");
}

/* bonus 2 */

var month = "March";

switch (month) {
  case "March":
    console.log("Winter");
    break;

  case "April":
    console.log("Winter");
    break;

  case "May":
    console.log("Winter");
    break;

  case "June":
    console.log("Winter");
    break;
}

/* bonus 3 */

var roundedNumber = 3.6;
var roundedNumber1 = 3;
var roundedNumber2 = 4;

if (roundedNumber1 - roundedNumber && roundedNumber2 - roundedNumber ){
    console.log(Math.floor)
}
else{console.log(Math.ceil);
}



