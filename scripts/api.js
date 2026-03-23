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
function getLocalStorage(key){
  console.log(localStorage.getItem(key));
}
function removeLocalStorage(key){
  localStorage.removeItem(key);
}

console.log(localStorage);