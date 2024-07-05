const phone ={
    brand : "samsung",
    model : "Galaxy s22"
}
//....Object.entries(phone) changes this object into multi-dimensional arrays
// and flat()  converts it into a normal array
const objArray = Object.entries(phone).flat()

console.log(objArray)