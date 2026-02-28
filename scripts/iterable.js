//symbole.iterator function exists in a iterable
const numbers= [1,3,4,52,2];
// for (let num of numbers){
//     console.log(num);
// }
console.dir(numbers);
console.dir(numbers.at(1));
console.dir(numbers[Symbol.iterator]()); //returns an iterator which have next() function
let numIterator=numbers[Symbol.iterator]();
console.log(numIterator.next());
console.log(numIterator.next()); 
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());

//symbole.iterator function not exists in non-iterable
const numbers1={
    one:1,
    two: 3,
    three: 4,
    four: 42
}
// for (let num of numbers1){
//     console.log(num);
// }
console.dir(numbers1);
console.log(numbers1);
console.log(Object.entries(numbers1));
//make myNumbers object iterable
const myNumbers={};
myNumbers[Symbol.iterator]=()=>{
    let n=0;
    let done=false;
    return {
        next(){
            n+=10;
            if(n==100) {
                done = true;
            }
            return {
                value: n,
                done: done
            }
        }
    }
}
// for (let n of myNumbers){
//     console.log(n);
// }
let itMyNum= myNumbers[Symbol.iterator]();
console.log(itMyNum.next());
console.log(itMyNum.next());
console.log(itMyNum.next());
console.log(itMyNum.next());
console.log(itMyNum.next());
console.log(itMyNum.next());
console.log(itMyNum.next());
console.log(itMyNum.next());
console.log(itMyNum.next());
console.log(itMyNum.next());

const str= "myString";
let strIt=str[Symbol.iterator]();
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());
console.log(strIt.next());

//spread operator
console.log([..."Hello"]);
console.log([...['a',1,'b',5]]);
//console.log([...34]); returns - is not iterable