//function  without return type
function sum(a,b){
    console.log('sum:',a+b);
}
sum(5,10);

//function with return type

function sumR(a,b){
    return a+b;
}
let result=sumR(5,15);
console.log('sum with return:',result);

//Any statement after return will not execute
function hello(param1,param2){
    console.log('before return');
    return "Hello " +param1+ " "+param2;
    console.log('after return'); //this will not execute
}
let greetings=hello('world','!');
console.log(greetings);

let fun=hello; //function as value
console.log(fun, typeof fun);

let carName='volvo';
function showCarName(carName){
    console.log('car name is:',carName);
}
showCarName('BMW'); //local variable has higher priority
console.log('global car name is:',carName);