const ws = new WeakSet();

const val1 = {name:'alice'};
const val2 = {job:"devops"};
//const val3 = "Hello"   // we can only add objects in a weakset and it will not work if it has any other datatypes. 

ws.add(val1);
ws.add(val2);
//ws.add(val3);

console.log(ws.has(val1));
console.log(ws.has(val2));


ws.delete(val2);        // to delete a value from the weakset
console.log(ws.has(val2));

