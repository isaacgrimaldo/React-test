import '@testing-library/jest-dom';
import {renderHook, act} from '@testing-library/react-hooks';

import {useCounter} from '../../hooks/useCounter'

describe('Prueba en useCounter', () => {
     
    test('Debe devolver lo valores por defecto', () => {
        const {result} = renderHook( () => useCounter());
        const  hookUseCounter = result.current;

        expect(hookUseCounter.counter).toBe(10);
        expect( typeof hookUseCounter.decrement).toBe('function');
        expect( typeof hookUseCounter.increment).toBe('function');
        expect( typeof hookUseCounter.reset).toBe('function');
    });

    test('Debe de estable el contador cuando se le pasa el argumento', () => {
        const {result} = renderHook( () => useCounter(100) );
        const {counter} = result.current;
        
        expect(counter).toBe(100);
    });

    test('Debe de funcionar la funcion incrementar', () =>{
        const {result} = renderHook( () => useCounter(100) );
        const {increment}=  result.current;
        
        act(() => increment());

        const {counter} = result.current;
        expect(counter).toBe(101);
    });

    test('Debe de funcionar la funcion decrement', () =>{
        const {result} = renderHook( () => useCounter(100) );
        const {decrement}=  result.current;
        
        act(() => decrement());

        const {counter} = result.current;
        expect(counter).toBe(99); 
    });

    test('Debe de funcionar la funcion reset', () =>{
        const {result} = renderHook( () => useCounter(100) );
        const {reset}=  result.current;
        
        act(() =>{
            result.current.increment();
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(100); 
    });
});