function loadData(callbackF) {
    //create a new req
    const xhr = new XMLHttpRequest();
    console.log(xhr)
    //what to do when response arrive
    xhr.onload = function () {
        callbackF(this);
    }

    //prepare request - methods: GET, POST, PUT, PATCH, DELETE
    xhr.open("GET", './scripts/data.txt',true); //true means async, false means sync

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