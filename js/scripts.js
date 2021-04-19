function convertMillilitres(number) {
  return number / 1000;
}

function convertGrams(number) {
  return number / 1000;
}

function convertTeaspoons(number) {
  return number / 3;
}

function convertTempCelsius(number) {
  return (number * 9 / 5) + 32;
}


$(document).ready(function() {
  $("form#converterForm").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("#number").val());
    const unitConverter = $("input:radio[name=unitConverter]:checked").val();
    let result;

    if(unitConverter === 'convert millilitres to litres') {
      result = convertMillilitres(number);
    } else if(unitConverter === 'convert grams to kilograms') {
      result = convertGrams(number);
    } else if(unitConverter === 'convert teaspoons to tablespoons') {
      result = convertTeaspoons(number);
    } else if(unitConverter === 'convert degrees celsius to degrees fahrenheit') {
      result = convertTempCelsius(number);
    }

    $("#output").text(result);
    $("#converterResult").show();
  });
});