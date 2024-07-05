//Assigned to variables: You can assign a function to a variable, just like any other value
function greet(name){
    console.log(`Hello ${name}!`);
}
const sayHi = greet
sayHi('Alice')

//Passed as arguments: You can pass functions as arguments to other functions
function performAction(action) {
    action()
}
performAction(greet.bind(null,'Bob'))

//Returned from functions: Functions can return other functions. This is useful for creating functions on the fly or building custom function factories