const person = {
    name:"dom",
    age:25
}

Object.freeze(person)   //... we cannot add delete or modify the object
// Object.seal(person)  //... we can modify but cannot add or delete any values in obj
person.occupation = "Developer";
person.name = "jeff";
delete person.age;

console.log(person)