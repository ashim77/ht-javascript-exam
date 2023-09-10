function ascendingOrder(arrObj, key){
    return arrObj.sort((a, b) => a[key] - b[key]); 
}

const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
];

const data = ascendingOrder(people, "age");

console.log(data);

// const a = ['Sweety', 'Ashim', 'Kumar', 'Sirja'];

console.log(a.sort());

// function sortByKey(arr, key) {
//     return arr.sort((a, b) => a[key] - b[key]);
//     // console.log(arr);
//     // console.log(arr.slice());
// }

// const people = [
//     { name: "John", age: 30 },
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 35 },
// ];

// const sortedPeople = sortByKey(people, "age");
// console.log(sortedPeople);
