let x= -14;
console.log(Boolean(x)); //true

x="false";
console.log(Boolean(x)); //true;

x=false;
console.log(Boolean(x)); //false

x=0;
console.log(Boolean(x)); //false

x="";
console.log(Boolean(x)); //false

x=undefined;
console.log(Boolean(x)); //false

x=null;
console.log(Boolean(x)); //false

x= NaN;
console.log(Boolean(x)); //false

console.log(2<'18');
console.log('2'<'18');