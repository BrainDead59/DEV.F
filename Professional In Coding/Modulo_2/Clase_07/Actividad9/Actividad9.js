var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

console.log(student.name)
console.log(student['age'])
student.name='Steve Jobs'
console.log(student.name)

console.log("-----------------")

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

for(var propiedad in student){
    console.log(student[propiedad])
}

console.log("-----------------")

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

if(student.hasOwnProperty('name')){
    console.log('Existe')
}

console.log("-----------------")

console.log(student)
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
delete student.rollno
console.log(student)

console.log("-----------------")

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

student.age=35
console.log(student)

console.log("-----------------")

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

student.pet='cat'
console.log(student)

console.log("-----------------")

const objeto = {}
Object.defineProperties(objeto, {
    color:{
        enumerable:true,
        value: 'Green',
        writable: true
    },
    tamaño:{
        enumerable:true,
        value:'Big',
        writable:true
    },
    peso:{
        enumerable: true,
        value: 10,
        writable:true
    },
    cantidad:{
        enumerable: true,
        value: 10,
        writable:true
    }
})
console.log(objeto)

console.log("-----------------")

function buscar(objeto,string){
    if(objeto.hasOwnProperty(string)){
        console.log('Existe')
    }
}

var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};

buscar(student,'name')

console.log("-----------------")


console.log("-----------------")
var simpleExercise = [{a: 11, b:224, name: "M48 Bulldog"}, {a:23, b:56, name: "Object 140"}, {a: 32, b:75, name: "T57 Heavy"}];

function sumar(simple){
    var concatena=[]
    for(var i=0;i<simple.length;i++){
        concatena[i]=simple[i].a+simple[i].b + ' ' + simple[i].name
    }
    return concatena
}

console.log(sumar(simpleExercise))