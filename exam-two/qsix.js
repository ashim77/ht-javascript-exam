function ascendingOrder(arrObj, key){
    return arrObj.sort((a, b) => a[key] - b[key]); 
}

const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
];

const data = ascendingOrder(people, "name");

console.log(data);