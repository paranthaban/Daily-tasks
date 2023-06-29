//ananoymous funtion
let array = ["madam", "racecar","hello","you"];

let isPalindrome = function(string) {
    let arrString = string.split("");
    let reverseString = arrString.reverse().join("");
    if(string == reverseString) 
        return true;
    else    
        return false;
}
for(let i = 0; i < array.length; i++) {
    if(isPalindrome(array[i])){
        console.log(array[i]);
    }
};

//IIFE
(function() {
    var strings = ["racecar", "madam", "civic"];
    var palindromes = [];
    for (var i = 0; i < strings.length; i++) {
      if (strings[i] === strings[i].split("").reverse().join("")) {
        palindromes.push(strings[i]);
      }
    }
    console.log(palindromes);
  })();

  //arrow functions
  const getAllPalindromes = (words) => {
    const palindromes = [];
    for (const word of words) {
      if (word === word.split("").reverse().join("")) {
        palindromes.push(word);
      }
    }
    return palindromes;
  };
  
  const words = ["hello", "racecar", "madam", "civic"];
  const palindromes = getAllPalindromes(words);
  console.log(palindromes); 
  



