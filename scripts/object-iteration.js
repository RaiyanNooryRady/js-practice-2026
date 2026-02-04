const person= {
    fname: "raiyan",
    lname: "noory",
    age: 28,
    isMarried: false,
}
for(let key in person){
    console.log(`${key} of person is ${person[key]}`);
}
const numbers=[3,54,2,5,1,63];
for (let index in numbers){
    console.log(`From for in ${numbers[index]}`);
}
for(let number of numbers){
    console.log(`From for of ${number}`);
}