import { supMostrar, infMostrar } from "./module/pantalla";
import { filtrar, arrCadena} from "./module/filtrar";

// --- Botones ---
const elements = document.querySelectorAll('.btn');
let array = [];
let historia = 0;
let clean_num = false;

// --- Principal ---

async function putElement(element) {    

    let promise = new Promise((resolve) => {
        switch(element) {
            case 'ac':
                clean();
                clean_num = false;
                break;
            
            case 'del':

                if(clean_num)clean();

                array.splice(array.length - 1);
                supMostrar(arrCadena(array));
                break;
            case '=':
                resolve(array);
                break;
            
            default:
                // if (para saber si limpia la pantalla si preciona un operador)
                if(!isNaN(+element) && clean_num) {
                    clean();
                    clean_num = false;
                }else if(isNaN(+element) && clean_num) clean_num = false;


                array.push(element);
                supMostrar(arrCadena(array)); // Mostrar pantalla     
        }  
    })

    let filter_getValue = filtrar(await promise) // Filtrar el array y retornar el valor    

    try {
        if(isNaN(filter_getValue)) throw new Error();  
        
        clean_num = true;
        cleanYpost(filter_getValue);   
        infMostrar(filter_getValue); // Mostrar resultado
        
    } catch (error) {
        clean();
    }
} 


// Agrega el evento
elements.forEach(boton => {
    boton.onclick = () => {
        putElement(boton.id);
    };
}); 


// ----- Funciones -----
// Funcion que limpia las pantallas
function clean () {
    array = [];
    supMostrar('');
    infMostrar(0)
}

// Conmuta el signo 'mas y menos'
function conmutar(num) {
    if( num <= Infinity ) return -num;
    return +num;
}   

function cleanYpost(hisotoria) {
        array = []
        array.push(hisotoria);  // Pone el nuevo valor, en el array
        historia = hisotoria;   // Guarda el valor para usar en plus-minus
}

// HolaMundo69
