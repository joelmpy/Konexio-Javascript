//   var fs = require("fs");

// fs.readFile("./jour07.txt",'utf-8', function (err, data) {
//       if (err) {
//          console.error(err);
//  return;
//       }
//       console.log("Lecture du fichier : " + data.toString());
//  });

// /* 02 */

//  let array = [1, 2, 3, 4 ,5];
//   var double = array.map((num)=> num * 2);
//  console.log(double);

//   /* 03 */

//  let longNames = [
//  	{
// 		firstName: "Jane",
//  		lastName: "Doe"
//  	},
// {
// 		firstName: "John",
// 		lastName: "Smith"
//  	}
//  ];

//  let shortNames = longNames.map(function(number1) {

//    let name = {
//        name : number1.firstName  + " " + number1.lastName
//      }
//      return name;
//    });

//  console.log(shortNames);

// /* 04 */

// var array6 = [1, "toto", 34, "javascript", 8];

// var numbers = array6.filter((number2) => {
 
// return typeof number2 === "number"

// });
// console.log(numbers);

// /* 05 */

// let numbers8 = [1, 2, 3, 4, 5, 6, 7 , 8];

// let even = numbers8.filter(
//     function(number5)
//     {
//     if(number5 % 2 === 0){
//         return number5;
//         }
// }
// );
// console.log(even);

/* 06 */ 

let cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]



let cookies = cakes.filter(function(choco){

	return	choco.flavor === "chocolate"

});

console.log(' resultat de cake au chocolat', cookies );




let cakeChoco = cookies.map(function(choco){

    return choco;
});

console.log(cakeChoco);

/* 03 */ 

const { message } = require("prompt");
const prompt = require("prompt");

prompt.get(['email', 'username', "password"], (err, res) => {
    if(err){
        console.log(err);
        return
    }
    console.log(res);
})

let schema = {
    properties:{
            email: {
pattern: '',
message: 'incorrect mail format',
required: true,
    } 
}
}
prompt.start(); 


/* 01 */ 

function formatDate (dateString){
    let date = new Date(dateString);
    let year = date.getFullYear();
    let months = date.getMonth() + 1;
    let day = date.getDate();
    if(day < 10 ){
        day = '0' + day.toString();
    }
    
    const finalDate = day + "/" + months + "/" + year;

console.log(finalDate);
return finalDate;
}
formatDate("2018-12-5");

/* 02 */ 

function calculateAge(date){

let today = new Date();
var age = today.getFullYear() - date;

console.log(age + 'ans')
}

calculateAge("2005");


 