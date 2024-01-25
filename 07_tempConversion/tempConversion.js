const convertToCelsius = function(fahrenheit) {
  const FtoC = (fahrenheit - 32) / (9 / 5);
  const celciusRounded = Math.round(FtoC * 10) / 10;
  return celciusRounded;
};

const convertToFahrenheit = function(celcius) {
  const CtoF = celcius * (9 /5) + 32;
  const fahrenheitRounded = Math.round(CtoF * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
