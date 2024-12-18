// Write a function to reverse a string
function reverseString(str) {
    // Your solution here
    let reverse = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}

// Example usage
// console.log(reverseString("hello")); // Should output "olleh"


// Write a function to count occurrences of a specific character
function countCharacter(str, char) {
    // Your solution here
    return str.split(char).length - 1;
}

// Example usage
// console.log(countCharacter("javascripta", "a")); // Should show how many 'a's are in the string


// Write a function to check if a string is a palindrome
function isPalindrome(str) {
    // Your solution here
    let palindrome = "";
    for( let i = str.length - 1; i >= 0; i--){
        palindrome += str[i];
    }
    if(palindrome == str){
        return true;
    }else{
        return false;
    }
}

// Example usage
// console.log(isPalindrome("racecar")); // Should return true


// Write a function to check if a string is a palindrome
function isPalindrome(str) {
    const reverse = str.split("").reverse().join("");
    return reverse == str;
}

// Example usage
// console.log(isPalindrome("racecar")); // Should return true


// Write a function to capitalize first letter of each word
function capitalizeWords(sentence) {
    // Your solution here
    return sentence.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

// Example usage
// console.log(capitalizeWords("hello world")); // Should output "Hello World"



// Write a function to remove extra whitespaces
function cleanWhitespace(str) {
    // Your solution here
    return str.split(" ").filter(word => word !== "").join(" ");
}

// Example usage
// console.log(cleanWhitespace("  hello   world  ")); // Should output "hello world"




// Write a function that counts the number of words in a string
function countWords(str) {
    // Hint: Consider using split() method
    let strArr = str.trim().split(/\s+/);
    return strArr.length;
}
// console.log(countWords("   Hello    world   programming  "));
// Example: countWords("Hello world programming") should return 3



// Create a function that counts the number of vowels in a string
function countVowels(str) {
    // Hint: Check each character against vowels
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
    
}
// console.log(countVowels("Hello"));


// Write a function that converts a string to title case
function toTitleCase(str) {
    // Hint: Capitalize first letter of each word
    return str.split(" ").filter(word => word !== '').join(" ");
}
// console.log(toTitleCase("hello  world"));

// Example: toTitleCase("hello world") should return "Hello World"

// Example: countVowels("hello") should return 2


// Create a function that reverses the order of words in a sentence
function reverseSentence(str) {
    // Hint: Split words, reverse their order, then join
    return str.split(" ").reverse().join(" ");
}
// console.log(reverseSentence("Hello world"));
// Example: reverseSentence("Hello world") should return "world Hello"


// Write a function that truncates a string to a specified length
function truncateString(str, maxLength) {
    // Hint: If string is longer than maxLength, add ellipsis
    if(str.length > maxLength){
        return str.slice(0, maxLength) + '...';
    }
}
// console.log(truncateString("Hello World", 5));
// Example: truncateString("Hello world", 5) should return "Hello..."



// Create a function that repeats a character a given number of times
function repeatCharacter(char, times) {
    // Hint: Use a loop or a string method
    let result = "";
    for(let i = 0; i < times; i++){
        result += char;
    }
    return result;
}

// console.log(repeatCharacter('*', 5));
// Example: repeatCharacter('*', 5) should return "*****"


// Write a function that checks if a string is a palindrome
function isPalindrome(str) {
    // Hint: Compare string with its reverse
    let palindrome = str.split("").reverse().join("");
    return palindrome == str;
}
// console.log(isPalindrome("racecar"));
// Example: isPalindrome("racecar") should return true




// Create a function that counts occurrences of a specific character
function countCharacter(str, char) {
    // Hint: Loop through string or use split()
    return str.split(char).length - 1;
}
// console.log(countCharacter("hello", "l"));
// Example: countCharacter("hello", "l") should return 2


// Write a function that removes duplicate characters from a string
function removeDuplicates(str) {
    // Hint: Use a Set or track characters you've seen
    return [...new Set(str)].join("");
}
// console.log(removeDuplicates("Hello"));
// Example: removeDuplicates("hello") should return "helo"

// Create a function that replaces all occurrences of a word
function replaceAllWords(str, oldWord, newWord) {
    // Hint: Use replace() with a global flag
    return str.split(oldWord).join(newWord);
}
// console.log(replaceAllWords("hello hello world", "hello", "hi"));
// Example: replaceAllWords("hello hello world", "hello", "hi") 
// should return "hi hi world"

// Write a function that counts the number of words in a string
function countWords(str) {
    // Hint: Consider using split() method
    // return str.split(" ").length;
    return str.trim().split(/\s+/).length;
}

// console.log(countWords("Hello world programming"));
// Example: countWords("Hello world programming") should return 3

// Create a function that counts the number of vowels in a string
function countVowels(str) {
    // Hint: Check each character against vowels
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
// console.log(countVowels("hello"));
// Example: countVowels("hello") should return 2


// Create a function that counts the number of vowels in a string
function countVowels(str) {
    // Hint: Check each character against vowels
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    for(char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
// console.log(countVowels("hello"));
// Example: countVowels("hello") should return 2



// Write a function that converts a string to title case
function toTitleCase(str) {
    // Hint: Capitalize first letter of each word
    // return str.trim().split(/\s+/).filter(word => word !== '').join(" ");
    return str.trim()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
}
// console.log(toTitleCase("hello world"));
// Example: toTitleCase("hello world") should return "Hello World"


// Write a function that converts a string to title case
function toTitleCase(str) {
    // Hint: Capitalize first letter of each word
    return str.trim()
            .split(/\s+/)
            .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
}
// console.log(toTitleCase("hello world"));
// Example: toTitleCase("hello world") should return "Hello World"



// Create a function that reverses the order of words in a sentence
function reverseSentence(str) {
    // Hint: Split words, reverse their order, then join
    return str.trim().split(/\s+/).reverse().join(" ");
}
// console.log(reverseSentence("Hello world"));
// Example: reverseSentence("Hello world") should return "world Hello"


// Write a function that truncates a string to a specified length
function truncateString(str, maxLength) {
    // Hint: If string is longer than maxLength, add ellipsis
    // let strLen = str.length;
    if( str.length > maxLength ){
        return str.slice(0, maxLength) + '....';
    } else{
        return str;
    }
}
// console.log(truncateString("Hello world", 5));
// Example: truncateString("Hello world", 5) should return "Hello..."


// Create a function that repeats a character a given number of times
function repeatCharacter(char, times) {
    // Hint: Use a loop or a string method
    let result = "";
    for( let i = 0; i < times; i++ ){
        result += char;
    }
    return result;
}
// console.log(repeatCharacter('*', 5));
// Example: repeatCharacter('*', 5) should return "*****"


// Create a function that repeats a character a given number of times
function repeatCharacter(char, times) {
    // Hint: Use a loop or a string method
    let result = "";
    for(let i = 0; i < times; i++ ){
        result += char;
    }
    return result;
}
// console.log(repeatCharacter('2', 5));
// Example: repeatCharacter('*', 5) should return "*****"



// Write a function that checks if a string is a palindrome
function isPalindrome(str) {
    // Hint: Compare string with its reverse
    let palindroneValue = str.split("").reverse().join("");
    return palindroneValue == str;
}
// console.log(isPalindrome("racecar"));
// Example: isPalindrome("racecar") should return true


// Create a function that counts occurrences of a specific character
function countCharacter(str, char) {
    // Hint: Loop through string or use split()
    return str.trim().split("").filter(word => word === char).length;
}
// console.log(countCharacter("hello", "l"));
// Example: countCharacter("hello", "l") should return 2

// Write a function that removes duplicate characters from a string
function removeDuplicates(str) {
    // Hint: Use a Set or track characters you've seen
    return [...new Set(str)].join("");
}
// console.log(removeDuplicates("hello"));
// Example: removeDuplicates("hello") should return "helo"



// Create a function that replaces all occurrences of a word
function replaceAllWords(str, oldWord, newWord) {
    // Hint: Use replace() with a global flag
    return str.trim().split(" ").map(word => word.replace(oldWord, newWord)).join(" ");
}
// console.log(replaceAllWords("hello hello world", "hello", "hi"));
// Example: replaceAllWords("hello hello world", "hello", "hi") 
// should return "hi hi world"



// Write a function that converts a string to camelCase
function toCamelCase(str) {
    // Hint: Split words, capitalize first letter of each word except the first
    return str.trim().split(" ").filter(word => word);
}
console.log(toCamelCase("hello world programming"));
// Example: toCamelCase("hello world programming") 
// should return "helloWorldProgramming"