//Primer actividad
var numero = Number(prompt("Inserta un numero"))
if(numero%2==0){
    console.log(numero, "es divisible entre dos")
}else{
    console.log(numero, "no es divisible entre dos")
}

//Segunda actividad
var numero = Number(prompt("Inserta un numero"))
if(Math.pow(-1,numero)==1){
    console.log(numero, "es par")
}else{
    console.log(numero, "es impar")
}

//Tercer actividad
var numero = Number(prompt("Inserta un numero"))
if(numero==1000){
    console.log("Ganaste un premio")
}else{
    console.log("Lo sentimos sigue participando")
}

//Cuarta actividad
var numero1 = Number(prompt("Inserta un numero"))
var numero2 = Number(prompt("Inserta otro numero"))
if(numero1>numero2){
    console.log("Numero1 mayor:",numero1)
}else if(numero1==numero2){
    console.log("Son iguales")
}else{
    console.log("Numero2 mayor:",numero2)
}

//Quinta actividad
var numero1 = Number(prompt("Inserta un numero"))
var numero2 = Number(prompt("Inserta otro numero"))
var numero3 = Number(prompt("Inserta otro numero"))
if(numero1>numero2 && numero1>numero3){
    console.log("Numero1 mayor:",numero1)
}else if(numero2>numero1 && numero2>numero3){
    console.log("Numero2 mayor:",numero2)
}else if(numero3>numero1 && numero3>numero2){
    console.log("Numero3 mayor:",numero3)
}else if(numero3==numero1 || numero3==numero2 || numero2==numero1){
    console.log("Dos números son iguales")
}
