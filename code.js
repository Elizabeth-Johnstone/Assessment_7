// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.
function addToZero(arrayOfNums) {
    for (let i = 0; i < arrayOfNums.length; i++) {
        for (let j = i + 1; j < arrayOfNums.length; j++)
        if (arrayOfNums[i] + arrayOfNums[j] === 0) {
            return true
        }
    }
    return false
}
// console.log(addToZero([])); // -> False
// console.log(addToZero([1])); // -> False
// console.log(addToZero([1, 2, 3])); // -> False
// console.log(addToZero([1, 2, 3, -2])); // -> True
// Runtime = O(n^2)
// Space complexity = O(n^2)

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
function hasUniqueChars (string) {
    newString = ""
    for (let i = 0; i < string.length; i++) {
        if (newString.includes(string[i])) {
            return false
        } else {
        newString += string[i]
        }
    }
    return true
}
// console.log(hasUniqueChars("Monday")); // -> True
// console.log(hasUniqueChars("Moonday")); // -> False
// Runtime = O(n^2)
// Space complexity = O(n^2)

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.
function isPangram (sentence) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < alpha.length; i++) {
        if (!sentence.includes(alpha[i]))
        return false
    }
return true
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // -> True
// console.log(isPangram("I like cats, but not mice")); // -> False
// Runtime = O(n^2)
// Space complexity = O(n^2)

// 4) Longest Word
// Write a function, findLongestWord, that takes a list of words and returns the length of the longest one.
function findLongestWord (arrayOfStrings) {
    let longestWord = arrayOfStrings[0]
    for (let i = 1; i < arrayOfStrings.length; i++) {   
        if (longestWord.length < arrayOfStrings[i].length){
        longestWord = arrayOfStrings[i]
        }
    }
console.log(longestWord.length)
}
// findLongestWord(["hi", "hello"]); // -> 5
// findLongestWord(["purple", "red", "cyan"]); // -> 6
// Runtime = O(n)
// Space complexity = O(n)