import '@testing-library/jest-dom';

import {getGifs} from '../../helpers/getGifs'

describe('Pruebas del archivo getGifs.js', () => {
    
    test('Debe traer el numero correcto de gifs', async() => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBe(10);
     });

     test('debe retornar un arreglo vacio si no le da una categoria', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0) 
     })
})