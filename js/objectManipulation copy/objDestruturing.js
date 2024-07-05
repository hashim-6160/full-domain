//object destructuring
const person = {
    name:'Sara',
    age:44,
    address:{
        street:'main st',
        city:'downtown'
    }
}
// const{name,age,address:{street,city}} = person

const{name,age,address} = person
const{street,city} = address

console.log(name);
console.log(age);
// console.log(address);
console.log(street);
console.log(city);

//array destructuring
const fruits = ['apple', 'orange', 'grapes', 'banana']
const[firstf,secondf,thirdf,fourthf] = fruits
console.log(firstf);
console.log(secondf);
console.log(thirdf);
console.log(fourthf);