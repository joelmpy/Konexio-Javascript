var min = 50;
var max = 200;

while(min <= max){
    min++;
if(min % 2 === 0){
    console.log("mes chiffres sont paire a " + min);
}
}

/* 02 */

let dice = 0;
let count = 0;

let mp1 = 1;
let mp2 = 6;

while(dice !== 6){
    dice = Math.floor(Math.random() * (mp2 - mp1 + 1) + mp1);
    console.log('dice' , dice)
count++;
}

console.log(count);

/* 03 */

let ussainBolt = 0;
let tysonGay = 0;

let mp3 = 1;
let mp4 = 10;

while (ussainBolt < 100 || tysonGay < 100) {
  let forUssein = Math.floor(Math.random() * (mp4 - mp3 + 1) + mp3);
  let fortyson = Math.floor(Math.random() * (mp4 - mp3 + 1) + mp3);

  ussainBolt += forUssein;
  tysonGay += fortyson;
}

if (ussainBolt > 100) {
  console.log("Usain wins");
} else if (tysonGay > 100) {
  console.log("Tyson wins");
} else if (ussainBolt > 100 && tysonGay > 100) {
  console.log("Everybody wins");
} else {
  console.error("an arror");
}
