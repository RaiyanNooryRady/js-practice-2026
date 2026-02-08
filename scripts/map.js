const fruits= new Map([
    ["apple",500],
    ["banana",400],
    ["orange",200]
]);
fruits.set("pineapple",800);
console.log(fruits.get("apple"));
console.log(fruits);
console.log(fruits.size);
fruits.delete("banana");
console.log(fruits);
console.log(fruits.has("apple"));
let text= 'Fruits Names: \n';
fruits.forEach(myFunction);
function myFunction(value,key){
    text+=key+": "+value+"\n";
}
console.log(text);
let entryText='';
for (let x of fruits.entries()){
    entryText+=x+" \n";
}
console.log(entryText);

