function createPerson(name, age) {
    return {
        name:name,
        age:age,
        greet:function () {
            console.log('Hello , my name is '+this.name);
        }
    }
}
const person1 = createPerson('Alice',30)
person1.greet()