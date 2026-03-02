class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    getName(){
        return `car name is ${this.name}`;
    }
    getYear(){
        console.log(this.year);
    }
    age(){
        const date=new Date();
        console.log(`Car ${this.name}'s age is ${date.getFullYear()-this.year}`);
    }
    //getter and setter
    get carName(){
        return this.name;
    }
    set carName(newName){
        this.name=newName;
    }
    static hello(x){
        console.log(`Hello from Car class, ${x.name}`);
    }

}

//class inheritance

class Model extends Car{
    constructor(brand,mod, year,color){
        super(brand, year);
        this.model=mod;
        this.color=color;
    }
    showDetails(){
        return this.getName() + ` and model is ${this.model} and year is ${this.year} and color is ${this.color}`;
    }
}
const car1= new Car('volvo',2003);
const car2= new Car('Toyota',2025);

console.log(car1.getName());
console.log(car2.getName());

//accessing getter and setter
car1.carName='BMW'; //using setter to change car name
console.log(car1.carName); //accessing getter

car1.getYear();
car2.getYear();
car1.age();
car2.age();
Car.hello(car1); //calling static method

const model1= new Model('Honda','Civic',2010,'red');
console.log(model1.showDetails());

