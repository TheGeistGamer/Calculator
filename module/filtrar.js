import { Calculator } from "./logica";
const calculator = new Calculator();


// --- Funcion principal ---
export const filtrar = (arr) => {
    try {
        if(arr.length == 1) return +arr;  // Devuelve si es solo un numero
        // Si la operacion inicia con un operador regresa un error
        else if(arr[0] == 'x' || arr[0] == '/' || arr[0] == '%') throw new Error(); 

        wait_resolve(returnIndice(arr), arr);
        return calculator.manzana;
        
    } catch (error) {
        return 'Error!'
    }
}


// Detecta el operador y el numero de veces declarado
function returnIndice (arr) {
    let operadores = ['+', '-', 'x','/','%'];
    let container = '';

    for (let valor of arr) {
        let result = operadores.indexOf(valor);

        if(!(result == -1)) {
            container += result;
        }
    }
    return container; 
}


// Espera y manda a que se resuelva
function wait_resolve (str, arr) {

    let container = [];
    let historia = 0;
    let guia = -1;
    
    // Devuelve si es una operacion sencilla
    if( !(2 <= str.length) ) return resolveProblem(+str, arr);  

    // Operaciones encadenadas
    for(let val of arr) {
        
        let find = Number(val);

        if(isNaN(find)){
            historia++ // Si encuentra un signo aumenta;
        } 
        
        if(historia == 2){  
            resolveProblem(+str[guia], container);
            // Establece el nuevo numero en el array
            container = [];
            container.push(calculator.manzana);
            historia = 1;
        }

        if(isNaN(find)) guia++;

        container.push(val);
    }

    resolveProblem(+str[guia], container);
}



// -- Regresa la operacion resuelta---
function resolveProblem (indice, arr) {

    switch(indice) {
        case 0:
            calculator.suma(arr);
            break;

        case 1:
            calculator.resta(arr);
            break;
        
        case 2:
            calculator.multi(arr);
            break
        
        case 3:
            calculator.divi(arr);
            break;
        case 4:
            calculator.porcentaje(arr);
            break;
    }
}



//  -- Transforma el array a cadena --
export function arrCadena (arr) {
    let str  = '';
    arr.forEach(value =>{
        if(!(value == '=')) str += value; // Omite estos signos 
    })
    return str;
}