const convertToCelsius = function(temperature) {
  let celsius = ((temperature - 32)*(5/9))
  if (celsius === 0 || Number.isInteger(celsius) ) {
    return Number(celsius)
  } else {
    return Number(celsius.toFixed(1))
  }
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = (temperature * (9/5)) + 32
  if (fahrenheit === 0 || Number.isInteger(fahrenheit)) {
    return Number(fahrenheit)
  } else {
    return Number(fahrenheit.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
