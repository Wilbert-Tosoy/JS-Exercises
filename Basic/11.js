// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

const celsiusToFahrenheit = celsius => {
    const fahrenheit = (celsius * 1.8) + 32;
    return ( fahrenheit + " °F")
}

const fahrenheitToCelsius = fahrenheit => {
    const celsius = (fahrenheit - 32) * 5/9;
    return ( celsius + " °C");
}

console.log(celsiusToFahrenheit(60));
console.log(fahrenheitToCelsius(45));