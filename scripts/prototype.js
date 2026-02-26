//constructor function
function Person(name,age){
    let person =Object.create(Person.prototype);
    person.name= name;
    person.age=age;
    return person;
}

Person.prototype ={
    eat(){
        console.log('person is eating');
    },
    sleep(){
        console.log('person is sleeping');
    },
    play(){
        console.log('person is playing');
    }
}
const sakib = Person("rady",43);
sakib.eat();

function PersonWithNew(name,age){
    this.name= name;
    this.age=age;
}
PersonWithNew.prototype ={
    eat(){
        console.log('person is eating');
    },
    sleep(){
        console.log('person is sleeping');
    },
    play(){
        console.log('person is playing');
    }
}

const john= new PersonWithNew("john",23);
john.sleep();

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
     eat(){
        console.log('person is eating');
    }
    sleep(){
        console.log('person is sleeping');
    }
    play(){
        console.log('person is playing');
    }
}
let dahy=new Student('dahy',35);
dahy.sleep();