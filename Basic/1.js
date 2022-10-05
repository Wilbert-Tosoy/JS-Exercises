console.log(today());

function today() {
    const date = new Date();

    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let prepand = (hours > 12) ? `PM` : `AM`;

    hours = (hours >= 12) ? hours - 12 : hours;

    if (hours === 0 && prepand === `PM`) {
        if (minutes === 0 && seconds === 0) {
            prepand = `Noon`;
        } else {
            hours = 12;
        }
    }
    if (hours === 0 && hours === `AM`) {
        if (minutes === 0 && seconds === 0) {
            prepand = `Midnight`;
        } else {
            hours = 12;
        }
    }

    console.log(`Today is ${daylist[day]}`);
    console.log(`Current Time : ${hours + " " + prepand} : ${minutes} : ${seconds}`);
}