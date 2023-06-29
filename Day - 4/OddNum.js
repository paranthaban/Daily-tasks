//anonymous function

var getOddnum = function() {

  var numbers = [5, 8, 4, 2, 7, 9, 3, 6, 4, 3];

  for (var i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {

      console.log(numbers[i]);  
    }
  }
};
getOddnum();

//IIFE

(function OddNumbers() {
    
  var numbers = [3, 10, 8, 17, 21, 33, 86, 97, 56, 69];

  for (var i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {

      console.log(numbers[i]);
    }
  }
})();

//arrow functions
var getOddnum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

const numbers = [3, 27, 8, 43, 68, 79, 17, 82, 95, 85];

getOddnum(numbers);
