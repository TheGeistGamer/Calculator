// --- logica ---
export class Calculator {
    
    constructor() {
        this.manzana = 0;
    }

    suma(str) {
        let result = 0;
        let test = str.join('').split('+');

        for(let value of test) {
            let num = +value;
            result += num;
        }
        return this.manzana = result;
    }

    resta(resultArr) {
        let result = 0;
        let indice = 1;
        let clean = resultArr.join('').split('-');

        for(let value of clean) {
            let num = +value;

            if(indice == 1){
                result = num;
                indice++;
                continue;
            }
            result -= num;
        }

        return this.manzana = result;
    }

    multi(resultArr) {
        let result = 0;
        let indice = 1;
        let clean = resultArr.join('').split('x');

        for(let value of clean) {
            let num = +value;

            if(indice == 1){
                result = num;
                indice++;
                continue;
            }
            result *= num;
        }

        return this.manzana = result;
    }

    divi(resultArr) {

        let result = 0;
        let indice = 1;
        let clean = resultArr.join('').split('/');

        for(let value of clean) {
            let num = +value;

            if(indice == 1){
                result = num;
                indice++;
                continue;
            }
            result = result / num;
        }

        return this.manzana = result;
    }

    porcentaje(resultArr) {
        let result = 0;
        let clean = resultArr.join('').split('%').shift();

        result = clean / 100;

        return this.manzana = result;
    }

    borrar() {
        return this.resultado = 0;
    }

}