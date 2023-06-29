// anonymous funtion
var array = [3, 8, 9, 4, 5, 23];   
var isPrime = function(n){
    
    if(n<=1)
        return false;        
    for(let i = 2; i < n; i++) {
        if(n % i == 0){
            return false;
        }
    }
    return true;
};
for(let i = 0; i < array.length; i++) {
    if(isPrime(array[i])){ 
        console.log(array[i]);
    } 
};

//IIFE function
(function() {
    var primes = [];
    for (var i = 2; i <= 100; i++) {
      var isPrime = true;
      for (var j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    console.log(primes);
  })();

  //arrow function
  const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  const findPrimeNumbers = (array) => {
    const primeNumbers = [];
    for (const number of array) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
    }
    return primeNumbers;
  };
  const array = [3, 8, 9, 4, 5, 23];
  const primeNumbers = findPrimeNumbers(array);
  console.log(primeNumbers);