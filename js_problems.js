//Return the factorial of the provided integer

function factorialize(num) {
  let counter = 1;
  while (num > 0) {
    counter *= num;
    num--;
  } return counter
}

factorialize(5); //should return 120

// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  let longestWord = 0;
  let strSplitting = str.split(' ');
  for (let element of strSplitting) {
    if (element.length > longestWord) {
      longestWord = element.length;
    }
  } return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); //should return 6


// Return an array consisting of the largest number from each provided sub - array.
// For simplicity, the provided array will contain exactly 4 sub - arrays.
function largestOfFour(arr) {
  let result = [];
  for (let subArr of arr) {
    result.push(Math.max(...subArr))
  } return result
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Check if a string(first argument, str) ends with the given target 
//string(second argument, target).

function confirmEnding(str, target) {
  let targetList = str.length - target.length;
  for (let i = 0; i < str.length; i++) {
    if (str[i + targetList] !== target[i]) {
      return false;
    }
  } return true;
}

confirmEnding("Bastian", "n");


// Repeat a given string str(first argument) for num times(second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let repeatedString = '';
  while (num > 0) {
    repeatedString += str;
    num--;
  } return repeatedString;
}

repeatStringNumTimes("abc", 3);
