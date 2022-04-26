//Primer ejercicio
function buscarPalabra(oracion, palabra){
    return oracion.includes(palabra)
}

var oracion = prompt("Inserta la oracion")
var palabra = prompt("Inserta la palabra")
if(buscarPalabra(oracion,palabra)){
    console.log("Existe dentro la palabra")
}else{
    console.log("No existe")
}

//Segundo ejercicio
function sumar(arreglo){    
    let suma=0
    for(let i=0;i<arreglo.length;i++){
        suma+=arreglo[i]
    }
    return suma
}

var arreglo=[1,2,3,4,10,11]
console.log('Suma igual a:' + sumar(arreglo))

//Tercer ejercicio
function palindrome(frase){
    for(var i=0;i<frase.length/2;i++){ 
        if(frase[i]==frase[frase.length-i-1]){
        }else{
            return 'No es palindromo'
        }
    }
    return 'Es un palindromo'
}

var palabra = prompt("Inserta la palabra")
console.log(palindrome(palabra))

//Cuarto ejercicio
function conversor(conversion){
    switch(conversion){
        case 'F':
            let F=Number(prompt("Inserta el valor"))
            var Ce=F-32/1.8
            console.log(Ce)
            break;
    
        case 'C':
            let C=Number(prompt("Inserta el valor"))
            var Fa=(1.8*C)+32
            console.log(Fa)
            break;
    
        default:
            console.log('No aplica')
            break;
    }
}

var conversion = prompt('Indica el tipo de temperatura a convertir: \nC-Celsius \nF-Fahrenheit')
conversor(conversion)
