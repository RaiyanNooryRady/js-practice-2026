const numbers= [2, 5, 20, 5, 16, 32];
function myFunction(value, index, array){
    console.log(`numbers[${index}] = ${value} in array ${array}`);
}
numbers.forEach(myFunction);
function myFunction2(value, index, array){
    return value*2;
}
const updatedArr=numbers.map(myFunction2);
console.log(updatedArr);
function myFunction3(value, index, array){
    return value>10;
}
console.log(numbers.filter(myFunction3));

// sum of all array elements. total is the accumulator, value is the current value
function myFunction4(total, value, index, array){
 console.log(total, value);
 return total+value;
}
const neNumbers=numbers.reduce(myFunction4, 0);
console.log(neNumbers);
console.log(numbers.reduceRight(myFunction4, 0));

console.log(numbers.every(myFunction3)); // checks if all values are >10
console.log(numbers.some(myFunction3)); // checks if some values are >10

console.log(numbers.indexOf(5)); // returns index of first occurrence of 5
console.log(numbers.lastIndexOf(5)); // returns index of last occurrence of 5
console.log(numbers.includes(5)); // checks if 5 is present in the array
console.log(numbers.find(myFunction3)); // returns first value >10
console.log(numbers.findIndex(myFunction3)); // returns index of first value >10

const d= new Date(2024,11,4); // Note: months are 0-indexed in JavaScript
console.log(d.toDateString());