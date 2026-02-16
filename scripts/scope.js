let x=5; //global scope
const y=10; //global scope
var z=42; //global scope
function myFunction(){
    carName="Volvo"; //global scope because variable is not declared
}
myFunction();

console.log(carName);