// Write a JavaScript program to rotate the string 'w3resource' in right direction by removing one letter from the end of the string and attaching it to the front.

const rotate = () => {
    let string = "w3resource";

    for (let i = 0; i < 11; i++) {
        console.log(string);
        string = (string.slice(string.length - 1) + string.substring(0, string.length - 1));
    }
}

rotate();