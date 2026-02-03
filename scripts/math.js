console.log(Math.PI); // prints the value of PI
console.log(Math.E); // prints the value of Euler's number
console.log(Math.sqrt(16));
console.log(Math.SQRT1_2); // prints the square root of 1/2
console.log(Math.SQRT2); // prints the square root of 2
console.log(Math.abs(-7.25)); // prints the absolute value
console.log(Math.pow(2,4)); // prints 2 raised to the power 4
console.log(Math.exp(1)); // prints e raised to the power 1
console.log(Math.LN2); // prints natural log of 2
console.log(Math.LN10); // prints natural log of 10
console.log(Math.log(10)); // prints natural log of 10
console.log(Math.log2(16)); // prints base 2 log of 16
console.log(Math.log10(100)); // prints base 10 log of 100
console.log(Math.ceil(4.2)); // prints 5
console.log(Math.floor(4.7)); // prints 4
console.log(Math.round(4.5)); // prints 5
console.log(Math.round(4.2)); // prints 4
console.log(Math.trunc(-4.7)); // prints -4
console.log(Math.sign(-7)); // prints -1
console.log(Math.sign(0)); // prints 0
console.log(Math.sign(7)); // prints 1
console.log(Math.sin(30*Math.PI/180)); // prints 0.5
console.log(Math.sin(90*Math.PI/180)); // prints 1  
console.log(Math.min(0, 150, 30, 20, -8, -200)); // prints -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // prints 150
console.log(Math.random()); // prints random number between 0 and 1
console.log(Math.ceil(Math.random()*10)); // prints random number between 0 and 10
function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(getRandomInt(70,81)); // prints random integer between 1 and 100              