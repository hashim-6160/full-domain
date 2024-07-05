//generator function to print even numbers below 100
function* evenNums(){
    for(let i=1;i<=100;i++){
        if (i%2 ==0){
            yield i
        }
    }
}
const evens = evenNums()
for(let i=0;i<50;i++){
    console.log(evens.next().value);
}

//genertor function even number printing
function* generator(n){
  for(let i=1;i<=n;i++){
    if(i%2!==0){
      yield i
    }
  }
}

let odd = generator(100)

for(let i of odd){
  console.log(i)
}