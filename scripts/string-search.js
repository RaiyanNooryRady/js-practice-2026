let str="Hello islami world ! This is a javascript era!";
console.log(str.indexOf("world")); //13
console.log(str.indexOf('wold')); //-1 not found
console.log(str.indexOf('is')); //6 first occurrence
console.log(str.indexOf('is',7)); //23 start searching from index 7


console.log(str.lastIndexOf('is')); //26 last occurrence
console.log(str.lastIndexOf('is',24)); //23 search backwards from index 24

console.log(str.search('is')); //31 and cannot take second parameter
console.log(str.search(/JAVASCRIPT/i)); //31 case insensitive search with regex

console.log(str.match(/is/g)); //['is', 'is', 'is'] returns array of all matches

console.log(str.includes('javascript')); //true
console.log(str.includes('javascript', 32)); //false check from index 32

console.log(str.startsWith('Hello')); //true
console.log(str.startsWith('islami',6)); //true check from index 6
console.log(str.startsWith(' is',5)); //true check from index 5

console.log(str.endsWith('era!')); //true
console.log(str.endsWith('is',25)); //true check if string ends with 'is' considering only first 25 characters