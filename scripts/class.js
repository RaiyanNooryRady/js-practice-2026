class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    getName(){
        console.log(`car name is ${this.name}`);
    }
    getYear(){
        console.log(this.year);
    }
    age(){
        const date=new Date();
        console.log(`Car ${this.name}'s age is ${date.getFullYear()-this.year}`);
    }
}

const car1= new Car('volvo',2003);
const car2= new Car('Toyota',2025);
car1.getName();
car2.getName();
car1.getYear();
car2.getYear();
car1.age();
car2.age();