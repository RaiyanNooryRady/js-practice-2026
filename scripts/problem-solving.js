//print 1-6 number randomly in ludu.
//console.log(Math.floor(Math.random()*6)+1);

function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(randomNum(1,6));
//how to rearrange all students name alphabetically.

let students=["John","Alice","Bob","Charlie","David"];
students.sort();
console.log(students);

//how to rearrange students roll numbers in ascending order.

let rollNumbers=[23,5,12,45,3,18];
rollNumbers.sort(function(a,b){return a-b;});
console.log(rollNumbers);