import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks'

import {useFetchGifs} from '../../hooks/useFetchGifs';

describe('Pruebas del archivo useFetchGifs.js', () => {
      test('debe de retornar el estado incial', async() => {
          const {result , waitForNextUpdate} = renderHook(() => useFetchGifs('Goku'));
          const {data , loading} = result.current;
          
          await waitForNextUpdate();

          expect(data).toEqual([]);
          expect(loading).toBe(true);
      });

      test('Debe de retornar las imagnes y cambiar el estado de carga a false', async() => {
        const {result , waitForNextUpdate} = renderHook(() => useFetchGifs('Goku'));
        await waitForNextUpdate();
        
        const {data , loading} = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
      })
});




