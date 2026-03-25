function loadData(callbackF) {
    //create a new req
    const xhr = new XMLHttpRequest();
    console.log(xhr)
    //what to do when response arrive
    xhr.onload = function () {
        callbackF(this);
    }

    //prepare request - methods: GET, POST, PUT, PATCH, DELETE
    xhr.open("GET", './scripts/data.txt', true); //true means async, false means sync

    //add a request header
    xhr.setRequestHeader('MY_TEST', 'DEVSELLER');

    //request send
    xhr.send();

    console.log('hello');

    //abort
    //xhr.abort();
}
function callback1(xhr) {
    const demo = document.getElementById('demo');
    demo.innerHTML = xhr.responseText;
    console.log('response receieved');
    console.log(xhr.getAllResponseHeaders());
    console.log(xhr.getResponseHeader('etag'));
}
function callback2(xhr) {
    const demo2 = document.getElementById('demo2');
    demo2.innerHTML = xhr.responseText;
    console.log('response receieved');
    console.log(xhr.getAllResponseHeaders()); //all response headers
    console.log(xhr.getResponseHeader('date')); //single response header
}
function sendRequest(method, url, data) {

    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            //handle application error
            if (this.status >= 400) {
                reject(`There was an application error! with status code ${this.status}`);
            }
            else {
                // const result=JSON.parse(this.responseText);
                const result = this.response;
                resolve(result);
            }
        }
        xhr.onerror = function () {
            reject('There was an error!');
        }
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.send(data);
    });
    return promise;
}
function getData() {
    const result = sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos');
    result.then(responseData => {
        console.log(responseData);
    })
        .catch(err => {
            console.log(err);
        })
}
function sendData() {
    const obj = {
        "userId": 1349,
        "id": 1222,
        "title": "delectus aut autem",
        "completed": false
    }
    const data = JSON.stringify(obj);
    const result = sendRequest('POST', 'https://jsonplaceholder.typicode.com/todos', data);
    result.then(responseData => {
        console.log(responseData);
    })
        .catch(err => {
            console.log(err);
        })
}