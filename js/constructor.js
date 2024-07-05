// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }


// let Alice = new Person('Alice',25);


// console.log(Alice.age)

let arr = [2,3,4,5,6,7,8,9]
let small = arr.reduce((acc,cv)=>{
    if(cv%2!==0){
        if(cv<acc){
            acc=cv
        }
    }
    return acc;
},[Infinity])

console.log(small);
