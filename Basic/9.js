// Write a JavaScript program to calculate days left until next year's Christmas.

const daysLeftUntilNextChristmas = () => {
    const dt = new Date();
    const oneDayInMilliseconds = 86400000;
    const nextChristmas = new Date(dt.getFullYear() + 1, 11, 25);

    if (dt.getMonth() === 11 && dt.getDay() > 25) {
        nextChristmas.setFullYear(nextChristmas() + 1);
    }

    let daysLeft = Math.ceil((nextChristmas.getTime() - dt.getTime()) / oneDayInMilliseconds);
    return daysLeft;
}

console.log(daysLeftUntilNextChristmas());