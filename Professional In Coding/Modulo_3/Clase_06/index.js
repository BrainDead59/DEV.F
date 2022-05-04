//Modulos
import {emoji} from "./modulo"

//Cuando se importa solo se coloca el nombre
import emoji from "./modulo"

//Clases
class Calculadora{

    constructor(){
        this.valor1 = 109
        this.valor2 = 0
    }

    sumar(valor1,valor2){
        this.valor1 = valor1;
        this.valor2 = valor2;
        return this.valor1 + this.valor2
    }

    restar(valor1,valor2){
        this.valor1 = valor1;
        this.valor2 = valor2;
        return this.valor1 - this.valor2
    }
    
    hoy(type){
        switch(type){
            case "dia":
                return new Date().getFullYear()
            
                default:
                    return new Date()
        }
    }
}

const sum = new Calculadora()
const fec = new Calculadora()
console.log(sum.sumar(1,2))
console.log(sum.restar(10,5))
console.log(fec.hoy("dia"))

//Promesas
//resolve, reject
const holaMundo = (quien) =>{
    return new Promise((resolve,reject)=>{
        if(quien == 'A'){
            resolve('Soluciones')
        }else{
            reject('Error')
        }
    })
}

holaMundo()
    .then(respuesta => console.log(respuesta))
    .catch((error) => console.log(error))