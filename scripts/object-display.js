const person ={
    name: 'raiyan',
    age: 28,
    city: 'Sylhet'
}
let text=`<h2>Object Display</h2><ul class='person-list'>`;
for(let key in person){
    text+='<li>'+key+' is: '+person[key]+'</li>';
}
text+='</ul>'
document.getElementById('demo').innerHTML=text;
//document.getElementById('demo').innerHTML=JSON.stringify(person);