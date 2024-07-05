//negative index
let arr = [10,20,30,40,50]

// foreach()
arr.forEach(elm=>{
    if(elm%2!==0){
        console.log(elm)
    }
})

//map()
let newe = arr.map(ele=>ele+1)
console.log(newe)

//filter()
let newer = arr.filter(ele=>{
  return  ele%2!==0
})
console.log(newer)

//reduce()
let small = arr.reduce((acc,cv)=>{
    if(cv%2!==0){
        if(cv<acc){
            acc=cv
        }
    }
    return acc;
},[Infinity])

console.log(small);



for(let i=arr.length-1; i>=0;i--){
    console.log(arr[i]);
}

//length
console.log(`length: ${arr.length}`);

//converts array to string
console.log(arr.toString());

//at()
console.log(arr.at(2));

//join()
console.log(arr.join(" "));//like toString() but you can specify a separator

//pop()
console.log(arr.pop());
console.log(arr);

//push()
console.log(arr.push(70));    
console.log(arr);

//shift()
console.log(arr.shift());
console.log(arr);

//unshift()
console.log(arr.unshift());
console.log(arr);

//changing the elements
arr[0] = 80
console.log(arr);

//appending new element using array length
arr[arr.length] = 100
console.log(arr);

//merging arrays - concatenation
const arr2 = [1,2,3,4,5]
console.log(arr.concat(arr2));
const arr3 = [9,8,7,6,5]
console.log(arr.concat(arr2,arr3));

//copyWithin
console.log(arr.copyWithin(2,0));

//flat()
const arr4 = [[34,43],[56,65],[67,76]]
console.log(arr4.flat());

//splice()
arr.splice(1,1,'me','you')
console.log(arr);

//toSplice()
const spliced = arr.toSpliced(1,2)
console.log(spliced);

//slice()
console.log(arr.slice(1));
console.log(arr.slice(1,3));