//Primer punto
var arreglo=[1,4,6,10,22,55,46,2,5,0]
for(var i=0;i<arreglo.length;i++){
    if(arreglo[i]>3){
        console.log(arreglo[i])
    }
}

//Segundo punto
var limit=5
var inicio=0
var arreglo=[]
while(limit>0){
    arreglo[inicio]=inicio
    limit--
    inicio++
}

console.log(arreglo)