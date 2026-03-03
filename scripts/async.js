// Tutorial: Js Callbacks
// Raiyan Noory Rady

function display(result){
    //document.getElementById('demo').innerText = result;
    console.log(result);
}
function displayDouble(result){
    console.log(result*2);
}
function calculator(a,b,callback){
    let sum = a+b;
    callback? callback(sum): null;
}
calculator(5,10,displayDouble);

// using built in function setTimeout and use callback function. Recall that setTimeout takes two parameters, a callback function and a time in milliseconds. The callback function will be executed after the specified time has elapsed.
// console.log('Before setTimeout');
// setTimeout(function(){
//     console.log('Inside setTimeout');
// }, 0);
// console.log('After setTimeout');
// setInterval(function(){
//     console.log('Inside setInterval');
// }, 2000);

const paymentSuccess= true;
const marks = 75;
function enroll(callback){
    console.log('Course enrollment is in progress');
    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }
        else{
            console.log('Payment failed. Please try again.');
        }
    }, 2000);
}
function progress(callback){
    console.log('Course on progress');
    setTimeout(function(){
        if(marks >=60){
            console.log('You have passed the course');
            callback();
        }
        else{
            console.log('You have failed the course. Please try again.');
        }
    }, 4000);
}
function certificate(){
    console.log('Preparing your certificate');
    setTimeout(function(){
        console.log('Congratulations! You have received your certificate');
    }, 1000);

}
enroll(function(){
    progress(certificate);
});
//progress(certificate);
//certificate();