//Variables declared with the var always have Global Scope.
//Variables declared with the var keyword can NOT have block scope. (always worked as global scope)

//global scope
let z=20; 
let p=2;
{
    //block scope
    let x=5;
    var y=10; // y is globally scoped because of var keyword
    console.log(`in block scope x,y,z: `,x,y,z); //5, 10, 20
    z=15;
    let p=3;
    console.log(`in block scope p: `,p); //3
}
console.log(`in global scope p, y,z: `, p,y,z); //2, 10, 15
//console.log(x); //ReferenceError: x is not defined