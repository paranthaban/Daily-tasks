class Person {

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}. I am ${this.age} years old and I am ${this.gender}.`);
    }

}
const person = new Person("Paranthaban", 23, "male");
person.introduceSelf();
