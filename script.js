

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


// DIA 13/04


console.log("")
console.log("Exercicio: verificar 3 notas e média=7")
nome = prompt('Informe o nome do usuário')
nota1 = Number(prompt('Informe a primeira nota:'))
nota2 = Number(prompt('Informe a segunda nota:'))
nota3 = Number(prompt('Informe a terceira nota:'))

const media = (nota1 + nota2 + nota3)/3

console.log('O/A aluno/a', nome, 'teve média: ', media)

console.log("Aprovação:",media>=7)

if(media>=7){
    console.log("Parabéns")
} else if(media<=6){
    console.log("Reprovado")
}


console.log('')
console.log("Exercicio: número par ou ímpar")
n = prompt("Informe um número")
if(n % 2 == 0){
    console.log(n,"é par")
}else{
    console.log(n,"é ímpar")
}


console.log("")
console.log("Exercicio: qual número é maior")
n1 = prompt("Informe o primeiro número")
n2 = prompt("Informe o segundo número")

if(n1>n2){
    console.log(n1, "é maior")
} else{
    console.log(n2,"é maior")
}


