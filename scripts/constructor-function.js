function Person(first, last, age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.fullName=function(){
        return this.firstName+' '+this.lastName;
    }
}
const x= new Person('raiyan','noory',27);
Person.prototype.country="Bangladesh";
console.log(x);

const country= new String("USA");
String.prototype.doingFun= ()=>{
    return "I am doing fun!";
}
console.log(country.doingFun());