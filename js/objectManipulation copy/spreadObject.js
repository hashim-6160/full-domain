const person  = {
    name:"hashim"
}

const newPerson = {...person,...{ 
    age:23,
    job:"IT"
}}

console.log(newPerson);

//....similar alternative using Object.assign()

const old = {
    name : "sohail",
    age:25
}

const neww =  {
    job : "IT",
    place: "Chennai"
}

const newdata = Object.assign(old,neww);
console.log(newdata);
