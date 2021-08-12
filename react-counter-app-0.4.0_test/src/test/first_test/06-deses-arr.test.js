import { retornaArreglo } from "../../first_test/07-deses-arr"

describe('Pruebas del archivo 06-deses-arr', () => {
    test('retornaArreglo debe devolver un numero y un string con cierto valor', () =>{
        const [letras , numero] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numero).toBe(123);
        expect(typeof numero).toBe('number');
    });
})