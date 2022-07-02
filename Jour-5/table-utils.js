function multiply(number) {
    console.log("ce chiffre vaut -->", number);
  
    if (!number) {
      return console.log("error");
    }
      for (var i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(number , "*" , i , "=", result);
      }
  }
  multiply(3);



  function addition(number) {
    console.log("ce chiffre vaut -->", number);
  
    if (!number) {
      return console.log("error");
    }
      for (var i = 1; i <= 10; i++) {
        const result = number + i;
        console.log(number , "+" , i , "=", result);
      }
  }
  addition(5);