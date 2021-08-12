import { getHeroeByIdAsync } from "../../first_test/09-promesas";
import heroes from '../../first_test/data/heros';

describe('Prievas del archivo promesas.js',() => {
      test('getHeroeByIdAsync Debe retornar un heroe asincronamentente', (done) => {
             const id = 1;
             const heroe = getHeroeByIdAsync(id)
                            .then( response => {
                                expect(response).toEqual(heroes[0]);
                                done(); //para terminar las pruebas asincronas
                            });
      });

      test('getHeroeByIdAsync Debe Indentificar y mandar un mensaje de error personalizado', (done) =>{
          const id = 20;
          const heroe = getHeroeByIdAsync(id)
                        .catch(error => {
                            expect(error).toBe('No se pudo encontrar el héroe');
                            done();
                        });
      });
});