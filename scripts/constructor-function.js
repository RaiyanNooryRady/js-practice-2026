function Person(first, last, age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.fullName=function(){
        return this.firstName+' '+this.lastName;
    }
}
const x= new Person('raiyan','noory',27);
console.log(x.fullName());