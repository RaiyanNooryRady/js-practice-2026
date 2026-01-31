let student =["John", "Doe", 21, true];
console.log(student);
//using for loop
for(let i=0; i<student.length;i++){
    console.log(`For loop ${i+1}:`,student[i]);
}
let size=student.length;
let n=size;
//using while loop
while(n--){
    console.log(`While loop ${size-n}:`,student[size-n-1]);
}
//using for..of loop
for (let item of student){
    console.log(`For of loop item:`,item);
}
let values = [34,12,4,44,22, 3, 10];
values.sort(); //default is string sort
console.log('string sorted values:', values);
values.sort((a,b)=>{return a-b}); //ascending order
console.log('sorted values:', values);