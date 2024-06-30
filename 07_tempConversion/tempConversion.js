function convertToCelsius(fahrenheit) {
  // Converts Fahrenheit to Celsius and rounds to 1 decimal place
  return Math.round(((fahrenheit - 32) * 5 / 9) * 10) / 10;
}

function convertToFahrenheit(celsius) {
  // Converts Celsius to Fahrenheit and rounds to 1 decimal place
  return Math.round(((celsius * 9 / 5) + 32) * 10) / 10;
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
