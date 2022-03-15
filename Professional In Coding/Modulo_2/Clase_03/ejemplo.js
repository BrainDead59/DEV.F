var condicion = null;
if(condicion){ //False
    console.log("If");
}else{
    console.log("Else");
}

//Segundo ejemplo
var condicional = true;
//Si es mayor de edad entra a la discoteca
//Si se llama Mario y mayor entrar a VIP

var nombre="Pedro";
var edad=19;

if(edad >= 18){
    console.log("Entra a la disco");
    if(nombre == "Mario"){
        console.log("Entra a la zona VIP");
    }
}else{
    console.log("No entra");
}


//Tercer ejemplo
var comida='tacos';
switch (comida) {
    case 'malteada':
        console.log("Puedes ir a McDonalds")
        break;
        
    case 'sandwich':
        console.log("Puedes ir a fresitas")
        break;

    case 'tacos':
        console.log("Puedes ir a cocuyos")
        break;

    default:
        console.log("No estas en México")
        break;
}