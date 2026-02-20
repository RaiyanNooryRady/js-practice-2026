
//find how many times the word 'action' is used? Find the first and last postion of 'action'
let sentence = `Success and action in business does not come from luck alone; it comes from focus, focus, and consistent action. Every day you build, you learn, and you improve. Growth happens when you decide to take action even when motivation is low. Small action leads to small progress, and small progress repeated daily creates big results. Many people wait for the perfect time, but the perfect time rarely comes. Instead, take Action now, adjust later, and keep moving forward. Discipline with action beats motivation, and consistency beats talent. If you stay consistent, consistent, and patient, your efforts and Action will compound into real success and lasting impact over time and action.`
// sentence = '';

console.log('First found action: ', sentence.indexOf('action'));
console.log('Last positon of action: ', sentence.lastIndexOf('action'));
console.log('first occurance of action: ', sentence.search(/action/i));
let matchedStrings = sentence.match(/action/ig);
const occurance = matchedStrings ? matchedStrings.length : 0;
console.log('Number of times used action: ', occurance);

function linearSearch(myArr, c) {
    let arrSize = myArr.length;
    for (let i = 0; i < arrSize; i++) {
        if (myArr[i] === c) {
            return i;
        }
    }
    return 'Not found!'
}
console.log(linearSearch(['m', 'a', 'b', 'x', 'b', 'z', 'c'], 'b'));

//find the biggest length string from an array and find the index number

let bigLen = 0;
let pos = 0;
let arr = ['abc', 'a', 'zc', 'zab', 'cdefghz', 'zac'];
let arrSize = arr.length;
for (let i = 0; i < arrSize; i++) {
    if (arr[i].length > bigLen) {
        bigLen = arr[i].length;
        pos = i;
    }
}
console.log(arr[pos]);

//Find the numbers between 1-100 which are divided by 3,5 and both 3 and 5.
let three = [], five = [], both = [];
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        both.push(num);
    }
    if (num % 5 === 0) {
        five.push(num);
    }
    if (num % 3 === 0) {
        three.push(num);
    }
}
console.log(three, five, both);

//remove falsy value from an array

const mixedArr = [
    "devseller",
    undefined,
    'something',
    23,
    null,
    "",
    true,
    "m",
    NaN,
    'asd',
    0
];
const trueArray = mixedArr.filter((el) => {
    if (el) return true;
});
console.log(trueArray);
console.log(mixedArr.filter(Boolean));

//remove falsy value from an object
const mixedObj = {
    a: "devseller",
    b: undefined,
    c: 'something',
    d: 23,
    e: null,
    f: "",
    g: true,
    h: "m",
    i: NaN,
    j: 'asd',
    k: 0
}

for (let key in mixedObj) {
    if (!mixedObj[key]) { delete mixedObj[key]; }

}
console.log(mixedObj);
