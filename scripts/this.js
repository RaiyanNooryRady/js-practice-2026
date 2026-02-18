const person = {
    firstName:"raiyan",
    lastName: "rady",
    age:28,
    fullName: function (){
        console.log(this);
        return (this.firstName+" "+this.lastName);
    }
}
const fullName=person.fullName();
console.log(fullName);
console.log(this);

const person1 = {
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}
const person2={
    firstName:"Johon",
    lastName:"Doe"
}
console.log(person1.fullName.call(person2));
