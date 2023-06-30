let obj1 = {name:"Person 1", age: 5};
let obj2 = {age: 5, name:"Person 1"};

function compareJSON() {

// compare the number of properties
if(Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
}

// compare the actual properties(keys)
    for(var key in obj1) {
      if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
          return false;
      }
    }
    return true;
}

const result = compareJSON();
console.log(result);