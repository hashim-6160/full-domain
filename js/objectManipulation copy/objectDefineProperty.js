const person ={}

// Object.defineProperty(person, "name",{
//     value:"dom",
//     writable:true // false
// })

Object.defineProperty(person, "name",{
    get(){
        return new Date()
    }
})


//person.name="hashim"; //.....we can define properties 

console.log(person.name)