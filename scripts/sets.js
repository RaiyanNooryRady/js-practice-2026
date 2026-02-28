const letters= new Set();
letters.add('a');
letters.add('b');
letters.add('a');
letters.add('c');
//console.log(letters);
for(let letter of letters ){
    console.log(letter);
}
let text= '';
letters.forEach(myFunction);
function myFunction(value){
    text+=value;
}
console.log(text);
console.log(letters.values());

const str= new Set(['aa','bb','aa','cd']);
console.log(str);
str.add('cc');
console.log(str);
console.log(str.values());