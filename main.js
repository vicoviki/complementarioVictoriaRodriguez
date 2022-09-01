// Crear un algoritmo con un condicional 

// let edad = prompt('Ingrese su edad:');
// if (edad >= 18) {
//     alert('Eres mayor de edad, puedes ingresar a la plataforma');
// } else { 
//     alert('Eres menor de edad, no puedes acceder a la informacion.');
// }


// Crear un algoritmo utilizando un ciclo

//  for(let i = 0; i <=3 ; i++){
//     let nombre = prompt('Ingrese su nombre:');
//     alert ('Hola '+ nombre );
//     let edadIngresada = Number(prompt('Ingrese su edad:'));
//     alert('Su edad es: '+edadIngresada);
//     let resultado = edadIngresada + 1;
//     alert('El año que viene tendrás '+resultado+' años');
// }

// for (let i=0 ; i<=15 ; i++){

// }


// let cantidad = Number(prompt('ingrese cantidad de prendas: '));
// for(let i = 1; i <=10 ; i--){

// let resultado = i--
// alert(resultado)
// }


for (let i = 10 ; i => 0 ; i--) {
    let cantidad = Number(prompt('ingrese cantidad de prendas: '));
    let resultado = i - cantidad;
    alert('El stock disponibles es de ' + resultado);

    if ( i==0 ){
        alert('no hay stock disponible' )
        break;
    }  
        
    
}



