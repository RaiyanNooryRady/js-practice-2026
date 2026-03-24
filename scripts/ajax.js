function loadData(callbackF) {
    //create a new req
    const xhr = new XMLHttpRequest();
    console.log(xhr)
    //what to do when response arrive
    xhr.onload = function () {
        callbackF(this);
    }

    //prepare request - methods: GET, POST, PUT, PATCH, DELETE
    xhr.open("GET", './scripts/data.txt');

    //add a request header
    xhr.setRequestHeader('MY_TEST', 'DEVSELLER');

    //request send
    xhr.send();

    //abort
    //xhr.abort();
}
function callback1(xhr) {
    const demo = document.getElementById('demo');
    demo.innerHTML = xhr.responseText;
}
function callback2(xhr) {
    const demo2 = document.getElementById('demo2');
    demo2.innerHTML = xhr.responseText;
}