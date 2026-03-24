const validation = () => {
  const inputObj = document.getElementById('id1');
  const demo = document.getElementById('demo');
  console.dir(inputObj);
  if (inputObj.validity.rangeOverflow) {
    inputObj.setCustomValidity('You have made a range overflow error');
  }
  else if (inputObj.validity.rangeUnderflow) {
    inputObj.setCustomValidity('You have made a range underflow error!');
  }
  else if (inputObj.validity.valueMissing) {
    inputObj.setCustomValidity('You have entered an empty value!');
  }
  if (!inputObj.checkValidity()) {
    demo.innerHTML = inputObj.validationMessage;
  }
}
//local storage

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
function getLocalStorage(key) {
  console.log(localStorage.getItem(key));
}
function removeLocalStorage(key) {
  localStorage.removeItem(key);
}
function clearLocalStorage() {
  localStorage.clear();
}

console.log(localStorage);

//session storage

function setSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}
function getSessionStorage(key) {
  console.log(sessionStorage.getItem(key));
}
function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}
function clearSessionStorage() {
  sessionStorage.clear();
}

console.log(sessionStorage);

//worker Object

console.log(Worker)
let w;
function startWorker() {
  //workers api
  const demo = document.getElementById('demo');
  if (typeof Worker !== 'undefined') {
    //worker available

    if (typeof w == 'undefined') {
      w = new Worker('./scripts/worker.js');
      console.log(w);
    }
    //listener
    w.onmessage = (event) => {
      document.getElementById('demo').innerHTML = event.data;
    }

  }
  else {
    alert('Your browser does not support web worker');
  }
}
function stopWorker() {
  if (typeof Worker != 'undefined') {
    w.terminate();
    w = undefined;
  }
  else {
    alert('not supported web server');
  }
}

//fetch api
const demo = document.getElementById('demo');
function getData() {

  fetch('http://127.0.0.1:5500/scripts/data.txt')
    .then((res) => {
      return res.text();
    })
    .then(data => {
      console.log('hello2');
      demo.innerHTML = data;
    })
  console.log('hello'); //prints first because of asynchronous req
}
async function getDataUsingAsync() {
  const response=await fetch('http://127.0.0.1:5500/scripts/data.txt');
  const data= await response.text();
  console.log(data);
  demo.innerHTML=data;
}