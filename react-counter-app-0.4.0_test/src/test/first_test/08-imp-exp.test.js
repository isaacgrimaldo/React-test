import { getHeroeById  , getHeroesByOwner} from "../../first_test/08-imp-exp";
import data from "../../first_test/data/heros";

describe('Pruebas del archivo imp-exp.js', () => {

     test('getHeroeById Debe devolver el heroe con el id indicado', () => {
           const id = 1;
           const heroe = getHeroeById(id);
           const heroeConfirm = data.find(h => h.id === id);
            
           expect(heroe).toEqual(heroeConfirm);
     });

     test('getHeroeById identifica cuando un heroe no existe', () => {
         const id = 10;
         const heroe = getHeroeById(id);
         
         expect(heroe).toBe(undefined);
     })

     test('getHeroesByOwner Debe retornar el numero de los heroe de cada compañias', () => {
         const ownwer = 'Marvel';
         const heroes = getHeroesByOwner(ownwer);

         expect(heroes.length).toBe(2);
     });

     test('getHeroesByOwner Debe retornar los heros de cada franquicia', () => {
        const ownwer = 'Marvel';
        const testHeroes = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ];
          
        const heroes = getHeroesByOwner(ownwer);
        
        expect(heroes).toEqual(testHeroes)
     });
})