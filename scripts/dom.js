// document.getElementById('demo').innerHTML = 'Hello World!';
console.dir(document)
console.dir(document.getElementsByTagName('a'));
console.dir(document.querySelector('.demo'));
console.dir(document.querySelectorAll('p'));
const formElement = document.getElementById('dev-form');
const displayContainer = document.getElementById('display-form');

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


const formObj = document.forms['dev-form'];
console.dir(formObj);
formElement.addEventListener('submit', function (event) {
    let text2 = '<ul>';
    event.preventDefault();
    for (let i = 0; i < formObj.length && formObj[i].value!='Submit'; i++) {
        text2 += `<li>${formObj[i].name}: ${formObj[i].value}</li>`;
    }
    text2 += '</ul>';
displayContainer.innerHTML = text2;
});
