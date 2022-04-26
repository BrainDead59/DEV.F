let perro = {
    nombre: 'Koko',
    edad: 2,
    color: 'calico',
    breed: 'Siames'
}

perro.nombre='Agosto'
console.log(perro.nombre)
perro['size']=10
console.log(perro)

//Crear un objeto a partir de la clase Obj 
const car = {}
Object.defineProperties(car, {
    modelo:{
        enumerable:true,
        value: 2022,
        writable: true
    },
    marca:{
        enumerable:true,
        value:'Toyota',
        writable:true
    },
    color:{
        enumerable: true,
        value: 'blanco',
        writable:true
    }
})
console.log(car)

//Array de objetos
const pets=[
    {
        nombre:'Mila',
        edad:2,
        color:'calico',
        especie:'gato',
        hobbies:['dormir','comer','jugar']
    },
    {
        nombre:'Bayleys',
        edad:4,
        color:'carey',
        especie:'gato',
        hobbies:['dormir','comer','bañarse']
    }
]

console.log(pets[1].hobbies[2])