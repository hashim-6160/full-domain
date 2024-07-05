//string.length
const string = 'This is my string'
console.log(string.length);

//charAt
console.log(string.charAt(2));  //treats string as string itself - explicitly states its purpose

console.log(string[0]); //implicitly treats string as an array-like object


//slice(start posn, end posn)
console.log(string.slice(5,10));
console.log(string.slice(11)); //if u omit 2nd parameter, the method will slice out the rest of the string
console.log(string.slice(-12,-7));//using negative index    
console.log(string.slice(-6));
//substring
console.log(string.substring(-6));//same as slice, but values less than 0 are treated as 0
//substr
console.log(string.substr(5,5));//same as slice but the 2nd parameter specifies the length of the extracted part

//concat
const string2 = 'okay'
console.log(string.concat(" ",string2));
console.log(string +" "+ string2); // without concat() method

//repeat
console.log(string.repeat(3));

//replace
console.log(string.replace('string','newString'));

//split - converting string to an array
console.log(string.split(""));