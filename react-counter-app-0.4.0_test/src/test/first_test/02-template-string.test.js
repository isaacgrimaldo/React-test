import { getSaludo } from "../../first_test/02-template-string"


describe('Pruebas del archivo Template-string', () =>{
    test('getSaludo  debe devolver Hola Isaac', () =>{
            const name = 'Isaac';
            expect(getSaludo(name)).toBe('Hola Isaac');
    })

    test('getSaludo debe devolver el saludo con el valor por defecto (Hola pedro)', () =>{
         expect(getSaludo()).toBe('Hola Pedro');
    })
})