//Solicitar los números al usuario. 

let num1=parseInt (prompt("Ingrese el primer número"))
let num2= parseInt(prompt("Ingrese el segundo número "))
let num3=parseInt(prompt("Ingrese el tercer número"))

//Vamos a validar e informar si hay números repetidos.

function numerosRepetidos(){
    if (num1===num2 && num1===num3){
        return "Todos lois números son iguales"
    }else if (num1===num2 || num2 === num3 || num3 ===num1){
        return "Dos números son iguales"
    }else {
        return "Todos los números son diferentes "
    }
}
console.log (numerosRepetidos())

// Determinar cual es el número mayor

function calcularMayor(){
    let numMayor
    if (num1>= num2 && num1 >= num3){
        numMayor=num1
    }else if (num2>= num1 && num2 >= num3){
        numMayor=num2
    }else{
        numMayor=num3
    }
    return numMayor
}
console.log ("el número mayor es " + calcularMayor())

//Determinar cúal es el número menor 
function calcularMenor(){
    let numMenor
    if (num1<=num2 && num1<=num3){
        numMenor=num1
    }else if (num2<=num1 && num2<=num3){
        numMenor=num2
}else{
    numMenor=num3
}
return numMenor
}
console.log ("El número menor es " + calcularMenor())

// Determinar cúal número es el del medio

function calcularMedio(){
let numMedio
if (num1 !== calcularMayor() && num1 !== calcularMenor()){
    numMedio = num1
}else if (num2 !== calcularMayor() && num2 !== calcularMenor()){
    numMedio = num2
}else{
    numMedio = num3
}
return numMedio
}
console.log ("El número del medio es " + calcularMedio())

console.log ("los números ordenados son " + calcularMayor() + ", " + calcularMedio() + ", " + calcularMenor())
