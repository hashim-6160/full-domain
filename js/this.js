// //normal functions
// function Person(name) {
//     this.name = name;
//   }
  
//   Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };
  
//   const person = new Person("Alice");
//   person.sayHello(); // Hello, my name is Alice
  

// //arrow functions
// const personObj = {
//     name: "Bob",
//     sayHello: () => {
//       console.log(`Hello, my name is ${this.name}`); // this refers to the global object/window
//     },
//   };
  
//   personObj.sayHello(); // This might not behave as expected due to the lexical this

// call apply bind
// function bio(a){
//   console.log(this.name+a)
//   console.log(this.age)
// }

// let obj = {
//   name :"Hashim",
//   age :24
// }

// bio.call(obj,"hello");

// bio.apply(obj,["hello"])

// let vs = bio.bind(obj,"hello")
// vs()

//genertor function even number printing
// function* generator(n){
//   for(let i=1;i<=n;i++){
//     if(i%2==0){
//       yield i
//     }
//   }
// }

// let odd = generator(100)

// for(let i of odd){
//   console.log(i)
// }

//currying sample

// function sum(a){
//   return function (b){
//     return function (c){
//       return a+b+c;
//     }
//   }
// }

// console.log(sum(5)(5)(5))

//callback sample
// function oo(){
// setTimeout(()=>{
//   console.log("hashim")
// },4000)}

// function a(b){
//   b()
//   console.log("hsghjs")
  
// }
// a(oo);
// a(()=>{
//   console.log("hihii")
// })


//promise sample

function fn(){
return new Promise((res,rej)=>{
  res("ok")
})
}
let y = fn()
y.then((a)=>{
  console.log(a)
}).catch((err)=>{
  console.log(err)
})

//async await

async function fn1(){
  await fn();
  console.log("hahsh")
}
fn1();

