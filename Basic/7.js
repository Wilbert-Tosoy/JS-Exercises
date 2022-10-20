// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

const isJanuaryFirstASunday = () => {
    for (let year = 2014; year <= 2050; year++) {
        let isSunday = new Date(year, 0, 1);
        if (isSunday.getDay() === 0) {
            console.log(`The January 1st of the year ${year} is a Sunday`);
        }
    }
}

isJanuaryFirstASunday();