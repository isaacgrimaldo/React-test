import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { todos } from '../../fixtures/todoList';

describe('Pruebas del archivo TodoApp.js', () => {
    
    const wrapper = shallow( <TodoApp/> );
    Storage.prototype.setItem = jest.fn( ()=>{} ); //Esta Funcion esta al pendiente del localStorage

    test('Debe de mostrar correctamente el componente', ()=> {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de llamar al localStorage Cuando se agrega un TODO', () => {
        const wrapper = mount( <TodoApp/> ); //Este metodo monta todo el componente a un nivel superior que shallow
        
        //Esta funcion hacer que se permita generar cambios en el componente
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( todos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')( todos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('Debe de Eliminar el TODO especificado', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')( todos[0] );
        wrapper.find('TodoList').prop('handleDelete')( todos[0].id );
        
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    });
});