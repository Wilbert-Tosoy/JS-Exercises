// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

const specifiedNumber = 40;
const difference = specifiedNumber - 19;

console.log((difference > 19) ? Math.pow(Math.abs(difference), 3) : difference);