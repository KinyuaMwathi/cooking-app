function convertLitres(number) {
  return number * 1000;
}

function convertKgs(number) {
  return number * 1000;
}

function convertTeaspoon(number) {
  return number / 3;
}

function convertTempInCelsius(number) {
  return (number * 9 / 5) + 32 + " " + "degrees fahrenheit";
}

const number = parseInt(prompt("Enter a number"));

alert(convertTempInCelsius(number));