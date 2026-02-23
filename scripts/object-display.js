const person ={
    firstName:"John",
    lastName: 'raiyan',
    age: 28,
    city: 'Sylhet',
    get fullName(){
        return this.firstName+" "+this.lastName;
    },
    set ageVal(val){
        this.age=val;
    }
}
console.log(person.fullName);
let x=person.ageVal=45;
let text=`<h2>Object Display</h2><ul class='person-list'>`;
for(let key in person){
    text+='<li>'+key+' is: '+person[key]+'</li>';
}
text+=`<li>updated age value is ${x}</li>`;
text+='</ul>'
document.getElementById('demo').innerHTML=text;
//document.getElementById('demo').innerHTML=JSON.stringify(person);

//getter
Object.defineProperty(person,"cityName",{
    get: function(){
        return 'city name is: '+ this.city;
    }
})
console.log(person.cityName);