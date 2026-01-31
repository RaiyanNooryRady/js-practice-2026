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

let greetings= ["Hello", "Hi", "Welcome", "Greetings"];
greetings.push("Salutations"); //add at the end
greetings[greetings.length]="Howdy"; //add at the end
greetings[10]="Good day"; //adds empty items in between
console.log(greetings.length);
let text="<ul>";
/* For Loop
for(let i=0;i<greetings.length;i++){
    text+=`<li>${greetings[i]}</li>`;
}
*/
//For each loop
greetings.forEach(function(item){
    text+=`<li>${item}</li>`;
});

text+="</ul>";
// let devArrayDiv=document.getElementById('dev-array');
// devArrayDiv.innerHTML=text;
console.log(Array.isArray(greetings)); //true
console.log(greetings instanceof Array);