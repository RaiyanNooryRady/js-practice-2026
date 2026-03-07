// document.getElementById('demo').innerHTML = 'Hello World!';
console.dir(document)
//console.dir(document.getElementsByTagName('a'));
//console.dir(document.querySelectorAll('p'));
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
const clickBtn = document.getElementById('click-btn');
const buttonContainer = document.getElementById('button-div');    
clickBtn.addEventListener('click', ()=>{
    console.log('Button is clicked');
},true);
clickBtn.addEventListener('mouseover', function(){
    console.log('Mouse is over the button');
});
clickBtn.addEventListener('mouseout', function(){
    console.log('Mouse is out of the button');
});
buttonContainer.addEventListener('click', function(){
    console.log('Button container is clicked');
},true);

const demo2= document.getElementById('demo');
console.log(`demo2: ${demo2}`);
console.dir(`demo node: ${demo2.lastChild.nodeValue}`);
console.log(demo2.childNodes[0].nextSibling.innerHTML);

const para=document.createElement('p');
para.innerText = 'This is a new paragraph';
const div1= document.getElementById('div1');
div1.appendChild(para);

const para2= document.createElement('p');
const textNode= document.createTextNode('This is another new paragraph');
para2.appendChild(textNode);
div1.appendChild(para2);

const p1= document.getElementById('p1');
div1.insertBefore(para2, p1);

const p2= document.getElementById('p2');
setTimeout(() => {
   // p2.remove();
   //div1.removeChild(p2);
   div1.replaceChild(para2, p2);
}, 2000);