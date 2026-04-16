//print 1-6 randomly
function getRandomInt(min, max){
    let value= Math.floor(min+Math.random()*(max-min+1));
    return value;
}
let result = getRandomInt(1,6);
console.log(result);
//decorate students names alphaetically
let students=['Rajon','Abid','Juhan','Tesla','Civit','John','Barno'];
students.sort();
console.log(students); 
//result display according to marks
const learners=[
    {
        name:'rajon',
        marks:45
    },
    {
        name:'Abid',
        marks:43
    },
    {
        name: 'Juhan',
        marks:67
    },
    {
        name:'Tesla',
        marks: 98
    },
    {
        name:'Civit',
        marks: 97
    },
    {
        name:'John',
        marks: 87
    },
    {
        name: 'Barno',
        marks: 34
    }
]
learners.sort(resultSort);
function resultSort(a,b){
    return b.marks-a.marks;
}
for(let i=0;i<learners.length;i++){
    learners[i].newRoll=i+1;
}
console.log(learners);
 

//find a year is leap year or not

function isLeapYear(year){
    let result=false;
    if(year%400===0 || (year%4===0 && year%100!==0)){
        result=true;
    }
    
    return result;
}
console.log(isLeapYear(2024));

//find number of vowels in a sentence
let str='I Am containg vowels';
function vowelCount(str){
    let cnt=0;
    const vowels='aeiou';
    str=str.toLowerCase();
    for(let ch of str){
       if(vowels.includes(ch))
        cnt++;
        
    }
    return cnt;
}
let res=vowelCount(str);
console.log(res);
//how to find out the duplicate numbers from an array
const arr=[5,63,5, 12, 9, 4, 10, 20, 12, 7, 4];
const duplicateArr=[];
function findDuplicates(value, index){
   let firstIndex=arr.indexOf(value);
   if(firstIndex!==index){
    duplicateArr.push(value);
   }
}
arr.forEach(findDuplicates);
console.log(duplicateArr);
//how to find out the unique numbers from an array
const uniqueNumbers= [];
arr.forEach(findUniques);

function findUniques(value,index){
    let firstIndex=arr.indexOf(value);
   if(firstIndex===index){
    uniqueNumbers.push(value);
   }
}
console.log(uniqueNumbers);