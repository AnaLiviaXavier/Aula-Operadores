// Fahrenheit para Kelvin
console.log("ESERCICIO 1")
// 77 graus fahrenheit para kelvin
console.log("a)")
let kelvin = (77-32)*(5/9)+ 273.15
console.log("77 graus Fahrenheit para Kelvin: ",kelvin, "K")

//80 graus celsius para fahrenheit

console.log("b)")
let fahrenheit = (80)*(9/5)+32
console.log("80 graus Celsius para Fahrenheit: ",fahrenheit, "F")


//30 graus celsius para fahrenheit e kelvin
console.log("c)")
fahrenheit = (30)*(9/5)+32
console.log("30 graus Celsius para Fahrenheit: ",fahrenheit, "F")
kelvin = (fahrenheit-32)*(5/9)+ 273.15
console.log("30 graus Celsius para Kelvin: ",kelvin, "K")


console.log("d)")
valorCelsius = parseFloat(prompt("Insira o valor em graus Celsius:"))
celsiusToFahrenheit = (valorCelsius)*(9/5)+32
console.log(valorCelsius+" graus Celsius para Fahrenheit: "+celsiusToFahrenheit+ "F")
fahrenheitToKelvin = (celsiusToFahrenheit-32)*(5/9)+ 273.15
console.log(valorCelsius+" graus Celsius para Kelvin: "+fahrenheitToKelvin+ "K")



