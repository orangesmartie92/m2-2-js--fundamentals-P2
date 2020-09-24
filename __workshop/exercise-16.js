// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getSumOfNumbers(args){
  return args.reduce((prev, curr) => prev + curr, 0);
}

function cube(base){
  return Math.pow(base, 3);
}

function extractSingleDigitsIntoArray(number){
  const stringifiedNumber = `${number}`;
  return stringifiedNumber.split('').map(strNum => parseInt(strNum));
}

function isSumOfCubeOfDigitsEqualToNumber(num){
  const numbers = extractSingleDigitsIntoArray(num);
  const cubedNumbers = numbers.map(number => cube(number));
  const sumOfCubedNumbers = getSumOfNumbers(cubedNumbers);
  return sumOfCubedNumbers === num && num;
}
function findNumbers(num1, num2) {
  // num1 and num2 are Numbers
  const filteredNumbers = [];
  for(let i=num1; i<= num2; i++){
    const numberFound = isSumOfCubeOfDigitsEqualToNumber(i);
    if(Number.isInteger(numberFound)){
      filteredNumbers.push(numberFound);
    }
  }
  return filteredNumbers;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
