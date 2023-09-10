// // How do you add or remove properties from an object dynamically two operations are managed from one function?
// // console.log("Ashim");
// function addRemoveObj(obKey, obValue, removeIndex){
//     const addObj = {age: 26};
//     addObj[obKey] = obValue;

//     console.log(addObj[obKey]);

//     // removeTask(taskIndex){
//     //     if (taskIndex >= 0 && taskIndex < this.tasks.length) {
//     //         this.tasks.splice(taskIndex, 1);
//     //     }
//     // }
// }

// console.log(addRemoveObj("name", "Sweety"));


function modifyObjectProperties(obj, key, value, action) {
    if (action === "add") {
        obj[key] = value;
    } else if (action === "remove") {
        delete obj[key];
    }
    // You can also handle other actions or provide error handling if needed
}

const myObject = { name: "John", age: 30 };

// Adding a property
modifyObjectProperties(myObject, "city", "New York", "add");

// Removing a property
modifyObjectProperties(myObject, "age", null, "remove");

console.log(myObject);