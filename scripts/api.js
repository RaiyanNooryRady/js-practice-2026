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