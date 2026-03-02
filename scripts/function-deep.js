(function () {
    console.log('I am self invoking function');
})(); //self invoking function or immediately invoked function expression (IIFE)

function myFunc(a, b) {
    console.log('I am a function and arguements passed:', arguments);
    return a + b;
}
console.dir(myFunc.toString(3, 5));
console.log(myFunc(3, 5));
console.dir(myFunc.length);

//arrow function
const myArrowFunc = (a, b) => {
    //console.log(arguments); //arguments object is not available in arrow functions
    return a + b;
};
console.log(myArrowFunc(5, 6));
function testFunc(...args) {
    console.log('I am a test function and arguments passed:', args, 'and length of arguments:', args.length);
    console.log('accessing arguments using index:', args[0], args[1], args[2]);
    console.log(arguments);
    console.log(arguments[0], arguments[1], arguments[2]); //arguments object is available in regular functions
}
testFunc(1, 2, 'abcd', 3, 4, 5);

//arguments passed by value and objects passed by reference
let val = 10;
function modifyVal(v) {
    v = 100;
    return v;
}
console.log(modifyVal(val));
console.log('after modifying value:', val);
let obj = {
    num1: 10,
    num2: 20
}
function modifyObj(o) {
    o.num1 = 100;
    o.num2 = 200;
    return o.num1 + o.num2;
}
console.log(modifyObj(obj));
console.log('after modifying object:', obj);

const person = {
    fullName: function (city, country) {
        return this.firstName + ' ' + this.lastName + ' from ' + city + ', ' + country;
    }
}
console.log(person.fullName()); //undefined undefined because 'this' refers to the global object where firstName and lastName are not defined
const person1 = {
    firstName: 'John',
    lastName: 'Doe'
}
const person2 = {
    firstName: 'Jane',
    lastName: 'Smith'
}
console.log(person.fullName.call(person1, 'New York', 'USA')); //John Doe from New York, USA because 'this' refers to person1 object where firstName and lastName are defined and parameters are the last two arguments passed to the call method
console.log(person.fullName.apply(person2, ['London', 'UK'])); //Jane Smith from London, UK because 'this' refers to person2 object where firstName and lastName are defined

console.log(Math.max(1, 2, 3)); //3
console.log(Math.max.apply(null, [1, 2, 3])); //3 because Math.max doesn't use 'this' context so we can pass null as the first argument and the array of numbers as the second argument to the apply method
//Closures

function temp(){
    let counter=0;
    return function(){
        counter++;
        return counter;
    }
}
const add=temp();
console.dir(add);
console.log(add()); //1 because the inner function has access to the counter variable of the outer function and increments it by 1 and returns the updated value
console.dir(add);
console.log(add()); //2 because the inner function has access to the counter variable of the outer function and increments it by 1 and returns the updated value
console.log(add()); //3 because the inner function has access to the counter variable of the outer function and increments it by 1 and returns the updated value
