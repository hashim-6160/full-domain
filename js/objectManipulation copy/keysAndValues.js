const num = {
    one :[1,2,3,[5,6]],
    two : [2],
    three : [3]
}

const sum = Object.values(num).flat(Infinity).reduce((acc,cv)=>acc+cv,0)
console.log(sum)

//...Object.values(num) is used to select the values of the object
//...Object.keys(num) can be used to select the values of the obj