// Create a function that converts temperatures from Celsius to Fahrenheit.

const celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

let temperatureInCelsius = 23;

console.log(celsiusToFahrenheit(temperatureInCelsius));