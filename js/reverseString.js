const string = 'hello world'
let reversedString = string.split('').reverse().join('');
console.log(reversedString)


//....palindrome
const  palu ="eye"
let flag = 0

const pal = palu.toLowerCase()

for(let i=0;i<=pal.length;i++){
    if(pal.charAt(i)!==pal.charAt(pal.length-(1+i))){
        flag++
    }
}
if(flag==0){
    console.log(palu+" "+"is a palindrome")
}else{
    console.log(palu+" "+"is a not palindrome")
}