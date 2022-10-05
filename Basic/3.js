console.log(getCurrentDate());

function getCurrentDate() {
    const date = new Date();

    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();

    return `${month + "-" + day + "-" + year}, ${month + "/" + day + "/" + year}`;
}