import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en el archivo TodoAdd.js ', () => {
    
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd
         handleAddTodo= { handleAddTodo }
    />);
    

    test('Debe de mostrar correctamente el componente', () => {
            
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar ala la function handleAddTodo sin los datos no estan correctos', () => {
         
      const onSubmit = wrapper.find('form').prop('onSubmit'); //Otras manera de hacer simulaciones
       onSubmit({ preventDefault(){} }); //Para la funcion que se pasa por refencia

       expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('Debe de llamar correctamente la funcion handleAddTodo y debe de pasar todo los argumetos correctamente y llama al reset', () => {
        const testValue = {
            name:'description',
            value: 'Aprender REACT.js'
        };
        const HandlerChanges =  wrapper.find('input').prop('onChange');
         
         HandlerChanges({target: testValue });

        const OnSubmit = wrapper.find('form').prop('onSubmit');
         OnSubmit({ preventDefault(){} });

         expect(handleAddTodo).toHaveBeenCalled();
         expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object) );
         expect(handleAddTodo).toHaveBeenCalledWith({
             id:expect.any(Number),
             desc: testValue.value, 
             done: false,
         });

        expect(wrapper.find('input').prop('value')).toBe('');
    });

});