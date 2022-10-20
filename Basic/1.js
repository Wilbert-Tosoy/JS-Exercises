const dt = new Date();

const today = dt.getDay();
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentHour = dt.getHours();
let currentMinute = dt.getMinutes();
let currentSeconds = dt.getSeconds();
let meridien = "A.M.";

if (currentHour > 12) {
    currentHour = currentHour - 12;
    meridien = "P.M.";
} else if (currentHour === 12) {
    currentHour = 0;
    meridien = "Noon";
}

console.log(`Today is : ${days[today]}`);
console.log(`Current time is : ${currentHour + " " + meridien + " : " + currentMinute + " : " + currentSeconds}`);