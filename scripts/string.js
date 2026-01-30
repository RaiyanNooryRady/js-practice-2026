//let text= "A brown fox jumps over the \"Lazy Dog\"";
let text= `A Special brown fox jumps over    the "Lazy Dog"    `;
//let text = "Hello world \Vesting\testing check";
console.log(text);
let x='abcd';
let y=new String('abcd');
let z= new String('abcd');
console.log('x value:',x);
console.log('x type:',typeof x);
console.log('y value:',y);
console.log('y type:',typeof y);
console.log(x==y); //true
console.log(x===y); //false
console.log(z===y);
console.log(y==z); //false

console.log(text.slice(2,7));
console.log(text.slice(-9,-1)); //negative index
console.log(text.slice(4)); //till end

console.log(text.substring(2,7)); //negative index not allowed
console.log(text.substr(2,7)); //second parameter is length
console.log(text.substr(4)); //till end

console.log(text.replace("brown", "black")); //case sensitive
console.log(text.toUpperCase());
console.log(text.toLowerCase());

let text2="   Hello World    ";
console.log(text.concat(text2));
console.log(text.trim());
console.log(text.charAt(5));
console.log(text.charCodeAt(5));
console.log(text[5]);

console.log(text.split(" ")); //split by space