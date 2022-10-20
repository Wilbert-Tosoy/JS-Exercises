// Write a JavaScript program to get the current date.

const dt = new Date();

const currentYear = dt.getFullYear();
const currentMonth = dt.getMonth();
const currentDay = dt.getDay();

console.log(`${currentMonth + "-" + currentDay + "-" + currentYear}`);