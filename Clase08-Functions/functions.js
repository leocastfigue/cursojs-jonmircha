// Funciones
// 1- Funcion declarada
// function estoEsUnaFuncion(){
//     console.log("Uno")
//     console.log("Dos")
//     console.log("Tres")
// }
// Invocación de función
// estoEsUnaFuncion();
// estoEsUnaFuncion();
// estoEsUnaFuncion();
// estoEsUnaFuncion();

function unaFuncionQueDevuelveValor(){
    console.log("Uno");
    return 19;
    console.log("Dos");
    console.log("Tres");
    return "La funcion ha retornado una cadena de texto";
} 
// let valorDeFuncion = unaFuncionQueDevuelveValor();
// console.log(valorDeFuncion)

function saludar (nombre="desconocido",edad="0"){
    console.log(`Hola ni nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Guru", 4);
saludar(); 
// Funciones declaradas vs funciones expresadas

funcionDeclarada();

function funcionDeclarada(){
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro incluso antes de que la funcion sea declarada")
}

funcionDeclarada();

// Declaración expresada
// función anónima

funcionExpresada();

const funcionExpresada = function(){
    console.log("Esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dirá Cannot access 'funcionExpresada' before initialization")
}
funcionExpresada();