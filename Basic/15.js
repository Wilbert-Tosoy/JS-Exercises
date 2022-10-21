// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

const userDefinedNumber = 29;
const difference = userDefinedNumber - 13;

console.log((difference > 13) ? Math.pow(Math.abs(difference), 2) : difference);