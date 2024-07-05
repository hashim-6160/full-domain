//map
const nums = [1,2,3,4,5]
const doublednums = nums.map(number=>number*2)
console.log(doublednums);

//filter
const evenNums = nums.filter(number=>number%2==0)
console.log(evenNums);

//reduce
const sum = nums.reduce((acc,curr)=>acc+curr,0)
console.log(sum);

//forEach
const sth = nums.forEach(function (number) {
    console.log(number*3);
})