const fruits=["Apple","Banana","Mango","Orange","Pineapple"];
console.log(fruits.toString());
fruits.push("bananas"); // adds at the end
fruits[fruits.length]="Grapes"; // adds at the end
console.log(fruits);
fruits.pop(); // removes from the end
console.log(fruits);
fruits.shift(); // removes from the start
console.log(fruits);
fruits.unshift("Strawberry"); // adds at the start
console.log(fruits);
delete fruits[3]; // deletes but does not change the length
console.log(fruits);
fruits.splice(3,1, "Kiwi"); // adds Kiwi at index 3 and removes 1 element
console.log(fruits);
let removedFruits=fruits.splice(2,1); // removes 1 element at index 2
console.log(fruits);
console.log(removedFruits);
let thirdFruits=["Papaya","Watermelon"];
let totalFruits=fruits.concat(removedFruits,thirdFruits); // merges three arrays
console.log(totalFruits);
let newFruits=totalFruits.slice(2,5); //extracts from index 2 to 4
console.log(newFruits);