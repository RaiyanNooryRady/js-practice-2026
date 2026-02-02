let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Sorted array: ", fruits.sort()); // sorts the array alphabetically
console.log("Reverse sorted array: ", fruits.reverse()); // reverses the sorted array
let numbers = [40, 100, 1, 5, 25, 10];
console.log("default sort (as strings)", numbers.sort()); // sorts as strings
// sorting numbers in ascending order
console.log("sorted ascending:", numbers.sort(function(a,b){return a-b}));
console.log("max value:", Math.max.apply(null, numbers)); // finds max value
console.log("min value:", Math.min.apply(null, numbers)); // finds min value

const cars= [
    {type: "volvo", year: 2021},
    {type: "BMW", year: 2018},
     {type: "BMW", year: 2014},
    {type: "Audi", year: 2020},
    {type: "Ford", year: 2018}
]
console.log("sorted cars by year:", cars.sort(function(a,b){return a.year -b.year}));
// sorting cars by type
console.log("sorted cars by type:", cars.sort(function(a,b){
    if(a.type.toLowerCase()<b.type.toLowerCase()) {return -1;}
    if(a.type.toLowerCase()>b.type.toLowerCase()) {return 1;}
    return 0;
}))