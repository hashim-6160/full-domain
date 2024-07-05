const mySet = new Set()

mySet.add(1);    // only unique values will be added into a set 
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add('hello');
mySet.add(true);
mySet.add([5,6]);
mySet.add({name:'aswin'});

console.log(mySet)