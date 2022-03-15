//Primer punto
var numero = Number(prompt("Inserta un numero"))

var iterador=1
while(numero>0){
    console.log(5*iterador)
    numero--
    iterador++
}

//Segundo punto
var numero = Number(prompt("Inserta un numero"))
var iterador=1
do{
    if(numero<0){

    }else{
        console.log(5*iterador)
        numero--
        iterador++
    }
}while(numero>0);


//Tercer punto
for(var i=0;i<50;i++){
    if((i+1)%2 != 0){
        console.log((i+1))
    }
}

