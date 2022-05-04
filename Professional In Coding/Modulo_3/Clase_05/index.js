console.log('😂')

function InformacionUsuario(){
    return 'Victor Reyes'
}

console.log(InformacionUsuario())

function dataUserA(firstName, lastName, age){
    var firstName = firstName || 'Bryan'
    var lastName = lastName || 'Díaz'
    var age = age || 21
    var message = "Mi nombre es "+ firstName +" " + lastName + "y tengo " + age + " años" 
    return message
}

//Valores predeterminados
function dataUserB(firstName='Bryan', lastName='Díaz', age=21){
    var message = "Mi nombre es "+ firstName +" " + lastName + "y tengo " + age + " años" 
    return message
}
console.log(dataUserB())

//Concatenar texto en JS
var mascota = "Perro"
var cita = '2022-05-03'
var mensajeA = 'Mi mascota '+ mascota +' tiene cita el dia ' + cita
var mensajeB = `Mi ${mascota} tiene cita el dia ${cita}`
console.log(mensajeB)

//Enviar mensaje
console.log(`Clean Code
Introduccion
Este es un libro que ...`)

//Destructuracion
var DBZ={
    name: 'Goku',
    level: 1000,
    breed: 'sayayin',
    age: 30,
    gender: 'male',
}
var {name,level,age}=DBZ //Toma valores de un tipo de dato y lo utiliza
console.log(name,level,age)
console.log({...DBZ,peso:30,height:"1.40"})

var male = ['Roberto','Victor','Alonso','Fausto']
var female = ['Delia','Flor','Frida','Gaby']
//var estudiantes = male.concat(female)
var estudiantes = [...male,...female]
console.log(estudiantes)
//var son accesibles globalmente por medio de la misma función
//Let utilizada dentro del scope de la función
//const valor constante que no se modifica

//Declaración de funciones
function saludo(nombre){
    return 'Hola ' + nombre
}

const saludo = (nombre)=>{
    return "Hola " + nombre
}

const saludo = (nombre)=>("Hola " + nombre)

const saludo = nombre => "Hola " + nombre

console.log(saludo('Mery'))

