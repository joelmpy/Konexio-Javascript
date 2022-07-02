const args = process.argv.slice(2);
console.log(args);

// function calculate(num1, num2, operator) {
//   // console.log("#calculette")
//   // console.log("#calculette" , "num1 vaut --> " , num1);
//   // console.log("#calculette" , "num2 vaut --> " , num2);
//   // console.log("#calculette" , "operator vaut --> " , operator);

//   if (operator === "+") {
//     console.log(num1 + num2);
//   } else if (operator === "-") {
//     console.log(num1 - num2);
//   } else if (operator === "/") {
//     console.log(num1 / num2);
//   } else if (operator === "x" || operator === "X") {
//     console.log(num1 * num2);
//   } else if (operator === "%") {
//     console.log(num1 % num2);
//   }
// }

// calculate(5, 10, "+");
// calculate(5, 10, "-");
// calculate(5, 10, "/");
// calculate(5, 10, "*");
// calculate(5, 10, "%");

/* 02 */

function multiply(number) {
  console.log("ce chiffre vaut -->", number);

  if (!number) {
    return console.log("error");
  }
    for (var i = 1; i <= 10; i++) {
      const result = number * i;
      console.log("3 mutiplé par", i, "=", result);
    }
}
multiply(3);

/* 03*/ 

var example = require("./table-utils");

module.exports = {
    multiply,
    addition
};