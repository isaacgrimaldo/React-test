import { getImagen } from "../../first_test/11-async-await";

describe('Pruebas  del Archivo async-await', () => {
      test('getImagen Debe retornar una url con https://', async() => {
               
             const url = await getImagen();
             expect(url.includes('https://')).toBe(true);
      });
});