let arr = [10,35,36,78,43,66,67,89,96,1,34,55]

let result = arr.reduce((acc,cv)=>{
    if(cv>acc[0]){
        acc[2]=acc[1];
        acc[1]=acc[0];
        acc[0]=cv;
    }
    return acc;
    
},[-Infinity]);

let first  = result[0];
let second = result[1];
let third  = result[2];

console.log(first)
console.log(second)
console.log(third)


let sum = arr.reduce((acc,cv)=>{
    if(cv%2!==0){
        acc+=cv
    }
    return acc
},0)

console.log(sum)