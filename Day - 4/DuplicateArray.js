//anonymous function
let removeDuplicate = function(array) {
    let temp = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i] !=  array[i+1]) {
            temp.push(array[i]);
        } 
    }
    return temp;
};

let array = [2, 6, 4, 2, 6, 5];
array = array.sort();
let result = removeDuplicate(array);
console.log(result);

//IIFE
(function () {
    let removeDuplicate = function (array) {
      let temp = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i] != array[i + 1]) {
          temp.push(array[i]);
        }
      }
      return temp;
    };
    let array = [2, 6, 4, 2, 6, 5];
    array = array.sort();
    let result = removeDuplicate(array);
    console.log(result);
  })();
  


