const str = "the code undefined code code"
console.log(str.indexOf("Code"));//.. indexOf is case sensitiive and there is no capital "Code" in the str so it returns -1
console.log(str.lastIndexOf("Code"));//.. lastIndexOf is case sensitiive and there is no capital "Code" in the str so it returns -1
console.log(str.indexOf("code"));//... starts from the left side of the string
console.log(str.lastIndexOf("code"));//... starts from the right side of the string
console.log(str.indexOf("code",5));//.. we can add the starting position



