import '@testing-library/jest-dom';
import { renderHook , act } from '@testing-library/react-hooks';

import {useForm} from '../../hooks/useForm';

describe('Pruebas sobre useForm', () => {
    
    const initialForm = {
        name:'Isaac',
        email: 'isaac@gmail.com',
    }

    test('debe de regresar un formulario por defecto', () => {
        const {result} = renderHook( () => useForm() );
        const [values , handleInputChange , reset] = result.current;

        expect(values).toEqual({});
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });
    
    test('Debe de establecer los valores del initialForm', () => {
        const {result} = renderHook( () => useForm(initialForm) );
        const [values] = result.current;

        expect(values).toEqual(initialForm);
    });
    
    test('Debe de establecer los valores del initialForm', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [,handleInputChange] = result.current;
          
        const testName ='Juan'

        act(() => {
            
            const testChange = {
                target:{
                    name:'name',
                    value:  testName,
                }
            }
            handleInputChange(testChange);
        })
        const [values] = result.current;
        const {name} =  values; 
        expect(name).toBe(testName);
    });
    
    test('debe reset restablecer los valores del formulario', () => {
        const {result} = renderHook( () => useForm(initialForm));
        const [,handleInputChange, reset] = result.current;
          
        const testEmail = 'test@example.com';

        act(() => {
            
            const testChange = {
                target:{
                    name:'email',
                    value:  testEmail,
                }
            }
            handleInputChange(testChange);

            reset();
        });
          
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
});