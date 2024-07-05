const wm = new WeakMap();

// Adding entries
let obj1 = { name: 'Alice' };
wm.set(obj1, 'Hello Alice');

let obj2 = { name: 'Bob' };
wm.set(obj2, 'Hello Bob');

console.log(wm.get(obj1)); // Output: Hello Alice
console.log(wm.get(obj2)); // Output: Hello Bob

// obj1 and obj2 are not strongly referenced elsewhere, so they can be garbage collected
obj1 = null;
obj2 = null;

console.log(wm.get(obj1)); // Output: undefined (obj1 has been garbage collected)
console.log(wm.get(obj2)); // Output: undefined (obj2 has been garbage collected)

// Adding another entry after garbage collection
let obj3 = { name: 'Charlie' };
wm.set(obj3, 'Hello Charlie');
console.log(wm.get(obj3)); // Output: Hello Charlie