import { getUser , getUsuarioActivo } from "../../first_test/05-funciones"


describe('Pruebas del archivo 05-funciones.js', () => {
    test('getUser debe devolver un objecto', () =>{
          const userTest = {
                uid: 'ABC123',
                username: 'El_Papi1502'
          }
        
          const user =  getUser();

          expect(user).toEqual(userTest);
    })

    test('getUsuarioAcivo debe retornar un objeto', () => {
          const name = 'Isaac'   

          const userTest = {
            uid: 'ABC567',
            username: name
        }

        const user =  getUsuarioActivo(name)

        expect(user).toEqual(userTest);
    })
})