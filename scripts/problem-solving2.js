
//find how many times the word 'action' is used? Find the first and last postion of 'action'
let sentence = `Success and action in business does not come from luck alone; it comes from focus, focus, and consistent action. Every day you build, you learn, and you improve. Growth happens when you decide to take action even when motivation is low. Small action leads to small progress, and small progress repeated daily creates big results. Many people wait for the perfect time, but the perfect time rarely comes. Instead, take Action now, adjust later, and keep moving forward. Discipline with action beats motivation, and consistency beats talent. If you stay consistent, consistent, and patient, your efforts and Action will compound into real success and lasting impact over time and action.`
// sentence = '';

console.log('First found action: ',sentence.indexOf('action'));
console.log('Last positon of action: ',sentence.lastIndexOf('action'));
console.log('first occurance of action: ',sentence.search(/action/i));
let matchedStrings=sentence.match(/action/ig);
const occurance= matchedStrings? matchedStrings.length:0;
console.log('Number of times used action: ',occurance );
