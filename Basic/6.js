// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

const isLeapYear = () => {
    let year = 2022;
    return (year % 4 === 0) ? "Leap Year" : "Not a Leap Year";
}

console.log(isLeapYear());