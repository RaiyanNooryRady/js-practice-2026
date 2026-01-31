console.log(Math.floor(9/2)); //4
let x=0.2+0.1;
console.log(x); //0.30000000000000004 strange behavior due to binary floating point
console.log(x.toFixed(2)); //0.30 string with 2 decimal places
X=(0.2*10+0.1*10)/10; //correct way
console.log(X); //0.3

let p="10";
let q="20";
console.log(p+q); //1020 string concatenation
console.log(p*q); //200 multiplication converts to number
console.log(Number(p)+Number(q)); //30 convert to number before addition

let num1=5;
let num2=10;
let result="The sum is: "+num1+num2;
console.log(result); //The sum is: 510

p=5, q="BCD";
console.log(p/q); //NaN not a number
console.log(isNaN(p/q)); //true
console.log(typeof NaN); //number