// for in loop
var jsonString = '{"name": "Dhanush", "age": 25, "city": "Chennai"}';
var objJSON = JSON.parse(jsonString);
for(var key in objJSON) {
    console.log(objJSON[key]);
}

// for loop
var country = '{"common": "Jordan", "official": "Hashemite Kingdom of Jordan", "population": 10203140}'
var objJSON = JSON.parse(country);
var objKeys = Object.keys(objJSON)
for(let i = 0; i < objKeys.length; i++) {
  console.log(objJSON[objKeys[i]]);
  }

// for of loop
var jsonCar = '{"name": "BMW", "year": 2020, "color": "Black"}';
var obj = JSON.parse(jsonCar);
var value = Object.values(obj);
for (var val of value) {
  console.log(val);
}

// forEach loop
var student = '{"name": "Ram", "class": 10, "city": "Chennai"}';
var jsonObject = JSON.parse(student);
var keys = Object.keys(jsonObject);
keys.forEach((key) => {
  console.log(`${key}: ${jsonObject[key]}`);
});