//normal function
function fun1(){
    console.log('goodnight');
}
fun1()

//arrow function
var fun2 = () => console.log('goodmorning');
fun2()

//
let myfu = (d) => console.log(d*d);
myfu(7)

//normal fun- sum of 2 numbers
var x,y
function add(x,y){
    console.log(x+y);
}
add(20,50)

//arrow fun- sum of 2 numbers
var sum = (a,b) => console.log(a+b);
sum(2,5)

//this keyword difference with functions - normal func
myobj = {
    a:10,
    b:20,
    fun:function(){
        console.log(this.a+this.b);
    }
}
myobj.fun()

//this keyword difference with functions - arrow func
myobj2 = {
    a:20,
    b:30,
    fun2:()=>{
        console.log(this.a+this.b)
    }
}
myobj2.fun2()   //will result NaN
//myobj2 is defined in the global scope (or the scope where myobj2 is declared), so 'this' inside fun2 refers to the global object (window in browsers).