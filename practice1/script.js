let str='Hello World';
let arr=str.split('');
console.log(arr);
arr[0]='h';
arr[6]='w';
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let newStr=arr.join('');
console.log(newStr);
x=10; //global variable without var, let or const but works in non strict mode. In strict mode it will throw an error.
console.log(x);