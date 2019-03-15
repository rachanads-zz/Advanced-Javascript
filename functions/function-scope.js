// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)
    // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
  var b=15,
    c=12;

  var abc = b < c;
    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)