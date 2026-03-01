(function (){
    console.log('I am self invoking function');
})(); //self invoking function or immediately invoked function expression (IIFE)

function myFunc(a,b){
    console.log('I am a function and arguements passed:',arguments);
    return a+b;
}
console.dir(myFunc.toString(3,5)); 
console.log(myFunc(3,5));
console.dir(myFunc.length);

//arrow function
const myArrowFunc = (a,b) => {
    //console.log(arguments); //arguments object is not available in arrow functions
    return a+b;
};
console.log(myArrowFunc(5,6));
function testFunc(...args){
    console.log('I am a test function and arguments passed:',args,'and length of arguments:',args.length);
    console.log('accessing arguments using index:',args[0],args[1],args[2]);
    console.log(arguments);
    console.log(arguments[0],arguments[1],arguments[2]); //arguments object is available in regular functions
}
testFunc(1,2,'abcd',3,4,5);

//arguments passed by value and objects passed by reference
let val=10;
function modifyVal(v){
    v=100;
    return v;
}
console.log(modifyVal(val));
console.log('after modifying value:',val);
let obj={
    num1:10,
    num2:20
}
function modifyObj(o){
    o.num1=100;
    o.num2=200;
    return o.num1+o.num2;
}
console.log(modifyObj(obj));
console.log('after modifying object:',obj);