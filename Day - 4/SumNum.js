//anonymous function
let sumNum = function() {

    let userInput = [5, 4, 6, 5, 30];
    let sum = 0;
    for (let i = 0; i < userInput.length; i++) {
      sum += userInput[i];
    }
    console.log(sum);
  };
  sumNum();

  //IIFE
  (function(arr) {					
    var sum = 0;  
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }  
    console.log(sum);
  })([5, 15, 3, 4, 3]);
  
  //arrow fuction
  const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  
  const arr = [1, 2, 3, 4, 5];
  
  console.log(sumArray(arr));


