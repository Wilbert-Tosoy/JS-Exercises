// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let year = 2024;

const isLeapYear = (year) => {
    return (year % 4 === 0) ? "Leap Year" : "Not a Leap Year";
}

console.log(isLeapYear(year));