fetch("/scripts/employees.json")
.then(res=>res.text())
.then(text=>{
    const data=JSON.parse(text);
    console.log('using fetch: ',data);
})

const jsonVal = `{
    "employees": [
        {
            "firstName": "raiyan",
            "lastName": "Noory",
            "age": 27
        },
        {
            "firstName": "daiyan",
            "lastName": "Dahy",
            "age": 22
        },
        {
            "firstName":"Tasin",
            "lastName":"Haiyan",
            "age": 28
        }
    ]
}`;

const data = JSON.parse(jsonVal);

console.log(data);
console.log(data.employees[0].firstName); // raiyan
console.log(JSON.stringify(data));
const arr=['abc','def','ghi',data];
console.log(arr);
// console.log(JSON.stringify(arr));
const strArr=JSON.stringify(arr);
localStorage.setItem('jsonTest',strArr);
console.log(localStorage.getItem('jsonTest'));
console.log(localStorage);
localStorage.clear();