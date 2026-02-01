let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Sorted array: ", fruits.sort()); // sorts the array alphabetically
console.log("Reverse sorted array: ", fruits.reverse()); // reverses the sorted array
let numbers = [40, 100, 1, 5, 25, 10];
console.log("default sort (as strings)", numbers.sort()); // sorts as strings
// sorting numbers in ascending order
console.log("sorted ascending:", numbers.sort(function(a,b){return a-b}));