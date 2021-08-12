import '@testing-library/jest-dom';
import {renderHook} from '@testing-library/react-hooks';

import {useFetch} from '../../hooks/useFetch';


describe('Pruebas del hook useFetch', () => {
       
    test('Debe de retornar los valores por defecto', () => {
         const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
         
         const {data , error , loading} =  result.current;
         expect(data).toBe(null);
         expect(loading).toBe(true);
         expect(error).toBe(null); 
    });

    test('Debe devolver los valores correctos al hacer la petición', async() => {
        const { result, waitForNextUpdate } =  renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate({timeout:3000});
      
       const { data , loading , error } = result.current ;
       expect(data.length).toBe(1);
       expect(loading).toBe(false);
       expect(error).toBe(null); 
    });

    test('Debe de retornar correctamente el error de las peticiones', async() => {
        const { result, waitForNextUpdate } =  renderHook( () => useFetch('https://reqres.in/apid/users?page=2'));
        await waitForNextUpdate({timeout:20000});
      
        const { data , loading , error } = result.current ;
       expect(data).toBe(null);
       expect(loading).toBe(false);
       expect(error).toBe('Sin Respuesta');
    })
});