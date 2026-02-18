//normal function
let hello = function(val){
    return val;
}
//arrow function
let world = (val)=>{
    return val;
}
//shortend
let world1=(val)=>val;
let world2= val=>val+' abcd';
console.log(hello('hello'));
console.log(world('world'));
console.log(world1('world1'));
console.log(world2('world2'));
