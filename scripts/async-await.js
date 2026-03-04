async function hello() { //async keyword returns a promise.
    return "Hello World!";
}
const result = hello();
result.then(function (value) {
    console.log(value);
});
//async function with error handling using try-catch block

const status = false;
console.log('Task1');

//promise definition or producing code
const promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        if (status) {
            resolve('Task2 completed successfully'); //when successful, it will return the value passed in resolve function
        }
        else {
            reject('Task2 failed'); //when failed, it will return the value passed in reject function
        }
    }, 2000);

});

//promise call or consuming code
promise
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    })
// promise.then(
//     function(value){
//         console.log(value);
//     },
//     function(error){
//         console.log(error);
//     }
// );
console.log('Task3');

const paymentSuccess = true;
const marks = 75;

function enroll() {
    console.log('Course enrollment is in progress');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            }
            else {
                reject('Payment failed. Please try again.');
            }
        }, 2000);
    });
    return promise;
}
function progress() {
    console.log('Course on progress');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (marks >= 60) {
                resolve();
            }
            else {
                reject('You have failed the course.');
            }
        }, 4000);
    });
    return promise;
}
function certificate() {
    console.log('Preparing your certificate');
    const promise = Promise.resolve('Congratulations! You have received your certificate');
    return promise;
}

// enroll()
//     .then(progress)
//     .then(certificate)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(error){
//         console.log(error);
//     }) 
//simplified using async-await

async function course() {
    try {
        await enroll();
        await progress();
        const message = await certificate();
        console.log(message);
    }
    catch (error) {
        console.log(error);
    }
   
}
course();