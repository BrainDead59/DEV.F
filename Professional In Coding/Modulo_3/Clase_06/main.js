const TOTAL_NUMEROS = 100
const listadoDeNumeros = []

const esPrimo = (num) =>{
    if(num === undefined){
        console.error('Ingresa un número')
    }else{
        if(num == 1){
            return false
        }
        for(var i=2;i<num;i++){
            if(num%i==0){
                return false
            }
        }
        return true;
    }
}

for(let i=1;i<=TOTAL_NUMEROS;i++){
    listadoDeNumeros.push({
        numero:i,
       esPrimo:esPrimo(i)
    })
}

listadoDeNumeros.forEach((element)=>{
    const numberGrid = document.querySelector('#numbers-grid')
    const square = document.createElement('div') //Indica el tipo de documento a crear
    numberGrid.appendChild(square) //Elemento a insertar
    square.innerText = element.numero
    element.esPrimo ? square.classList.add('primo') : square.classList.add('no_primo') //Agrega una clase
})