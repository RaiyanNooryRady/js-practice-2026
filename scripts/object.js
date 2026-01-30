//object creation
const student= {
    name: 'John Doe',
    age: 21,
    courses: ['Math','Physics', 'Science'],
    CR: true,
    greetings: function(){
        console.log('Hello, my name is', this.name);
        this.dreamAnnounce();
    },
    dreamAnnounce: function(){
        console.log('My dream is to become a scientist.');
    }
}

//accessing object properties
student.greetings();
for(let key in student){
    console.log(key,':',student[key]);
}
//modifying object property
student.age=22;
console.log('updated age:',student.age);

//displaying courses
for(let i=0; i<student.courses.length; i++){
    console.log(`Course ${i+1}:${student.courses[i]}`);
}
//checking property existence
console.log(student.hasOwnProperty('name')); //true

//adding new property
student.grade='A+';
student['grade']='A';
console.log('added grade:',student.grade);

//deleting a property
delete student.CR;
console.log('after deleting CR property:',student);


let x= new Number(10);
console.log('x value:',x);
console.log('x type:',typeof x);