//anonymous function
var titleCaps = function() {
  var input = "helloguvi";
input = input.charAt(0).toUpperCase() + input.slice(1);
console.log(input);
};
titleCaps ();

//IIFE

(function titleCaseStrings() {

    var strings = ["hello everyone", "this is a sentence"];
  
    for (var i = 0; i < strings.length; i++) {
      strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
    }
  
    console.log(strings);
  }());

//arrow function

const array = ["banana", "apple", "orange", "lemon"];

const toTitleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

array.forEach(toTitleCase);

console.log(array)


  
  