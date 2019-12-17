//Return the factorial of the provided integer

function factorialize(num) {
  let counter = 1;
  while (num > 0) {
    counter *= num;
    num--;
  } return counter
}

factorialize(5); //should return 120
