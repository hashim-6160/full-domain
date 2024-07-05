// let arr = [1,-2,2,3,4,5,6,7,8,9]
// let x=[]

// function isPrime(num){
//     if(num<=1) return false
//     for(let i=2; i < num; i++){
//         if(num%i==0){ return false}
//     }
//     return true
// }
// for(let num of arr){
//     if(isPrime(num)){
//         x.push(num);
//     }
// }
// console.log(x)

//....................................................
//prime usng filter

let ar = [1,-2,2,3,4,5,6,7,8,9,11,12,13]
let a=ar.filter(el =>{
    if(el<=1) return false
    for(let i=2;i<el;i++){
        if(el%i==0){
            return false
        }
    }
   return true
});
console.log(a)