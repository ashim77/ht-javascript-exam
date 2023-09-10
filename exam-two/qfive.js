// Write a JavaScript function that takes an array of numbers and returns a
// new array with only the even numbers. (Mark: 5)
// Example:
// Input: const numbers = [10, 21, 3, 14, 53, 55, 36, 48]
// Output: [10, 14, 36, 48]

function getEvenNumbers(numbers){
    const evenNumber = [];
    for(const number of numbers){
        if(number % 2 === 0){
            evenNumber.push(number);
        }
    }
    return evenNumber;
}

const inputNumbers = [10, 21, 3, 14, 53, 55, 36, 48];

console.log(getEvenNumbers(inputNumbers));
