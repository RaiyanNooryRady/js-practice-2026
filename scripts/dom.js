// document.getElementById('demo').innerHTML = 'Hello World!';
console.dir(document)
console.dir(document.getElementsByTagName('a'));
console.dir(document.querySelectorAll('p'));
const formElement = document.getElementById('dev-form');
const displayContainer = document.getElementById('display-form');
const formObj = document.forms['dev-form'];
const demoP = document.querySelector('.demo');
// formElement.addEventListener('submit', function(event){
//     event.preventDefault();
//     let text= '<ul>';
//     const name= document.getElementById('name').value;
//     const email= document.getElementById('email').value;
//     const age= document.getElementById('age').value;
//     text += `<li>Name: ${name}</li>`;
//     text += `<li>Email: ${email}</li>`;
//     text += `<li>Age: ${age}</li>`;
//     text += '</ul>';
//     displayContainer.innerHTML = text;
//     console.log('Submit button is clicked');
// });

console.log(formObj);

formElement.addEventListener('submit', function (event) {
    let text2 = '<ul>';
    event.preventDefault();
    for (let i = 0; i < formObj.length && formObj[i].value != 'Submit'; i++) {
        text2 += `<li>${formObj.elements[i].name}: ${formObj[i].value}</li>`;
    }
    text2 += '</ul>';
    displayContainer.innerHTML = text2;
    console.log(formObj['fname'].value);
});
// after loading javascript styles will be applied to the element with class 'demo' after 2 seconds
setTimeout(function () {
    demoP.style.color = 'red';
    demoP.style.fontSize = '20px';
    demoP.style.fontWeight = 'bold';
}, 2000);

function myMove() {
    const animate = document.getElementById('animate');
    let pos = 0;
    const id = setInterval(frame, 5);
    function frame() {
        if (pos == 350)
            clearInterval(id);
        else {
            pos++;
            animate.style.left = pos + 'px';
            animate.style.top = pos + 'px';
        }
    }
}