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

function isLeapYear(year){
    if(year%400===0 ||(year%4===0 && year%100!==0)){
        return true;
    }
    else{
        return false;
    }
}
console.log(isLeapYear(2020)); //true
console.log(isLeapYear(1900)); //false


//How to find number of vowels in a string.
const vowels="aeiouAEIOU";
function countVowels(str){
    let count=0;
   
    // for(let char of str){
    //    if(vowels.includes(char)){
    //     count++;
    //    }
    // }
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); //3 

//find duplicate numbers in an array
const numbers=[2,7,5,3,5,2,4,9,4];
const duplicates= numbers.filter(function(value,index,array){
   if(array.indexOf(value)!==index) return true;
});
console.log(duplicates);