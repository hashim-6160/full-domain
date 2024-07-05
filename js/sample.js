const a = [{f:34,f:[4,4,34,4]}]
const sum =Object.values(a[0].f).flat(Infinity).reduce((acc,cv)=>acc+cv,0);

console.log(sum);

const aa = [{adf:[{adf:[4,34,34],daf:5}]}]

function sumVal(obj){
    let summ=0;
    for(const key in obj){
        if(typeof obj[key] === 'number'){
            summ+=obj[key];
        }else if(typeof obj[key] === 'object'){
            summ+= sumVal(obj[key]);
        }else if(Array.isArray(obj[key])){
            obj[key].forEach(element => {
                summ+= sumVal(element)
            });

        }
    }
    return summ
}
const total = aa.reduce((acc,cv)=>acc+sumVal(cv),0);
console.log(total)


const abc = [{f:34,l:4},{f:34,l:4},{f:34,l:4},{f:34,l:4},{f:34,l:4},{f:34,l:4}]
function sumVals(arr){
    return arr.reduce((acc,cv)=>{
       // console.log(cv)
        for(let key in cv){
              acc+=cv[key];

        }
        return acc;
    },0);
}
console.log(sumVals(abc));
