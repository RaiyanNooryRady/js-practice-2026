let str='Hello World';
let arr=str.split('');
console.log(arr);
arr[0]='h';
arr[6]='w';
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
arr.forEach(function(item){
    console.log(`array item: ${item}`);
});
let newStr=arr.join('');
console.log(newStr);
x=10; //global variable without var, let or const but works in non strict mode. In strict mode it will throw an error.
console.log(x);
const person=[];
person['name']='John';
person['age']=30;
console.log(typeof person, typeof arr);
console.dir(person);
console.log(person instanceof Array);
const student={
    name:'John',
    age:30,
}
console.log(student instanceof Array)