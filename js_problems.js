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
