import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import {todos} from '../../fixtures/todoList'
import {TodoList} from '../../../components/08-useReducer/TodoList';

describe('Pruebas del archivo TodoList' , () => {
    
    const handleDelete = jest.fn(); 
    const handleToggle = jest.fn();
    
    const wrapper = shallow(<TodoList
        todos = {todos} 
        handleDelete = {handleDelete }
        handleToggle = {handleToggle}
     />);

     test('Debe de mostrar correctamente el componente', () => {
            expect(wrapper).toMatchSnapshot();
     });

     test('Debe de mostrar todo los TODOS', () => {
        
           const todoListItems = wrapper.find('TodoListItem').length;
           expect(todoListItems).toBe(todos.length);
     });

     test('Debe pasar correctamente la funciones', () => {
         
        const handleDelete = wrapper.find('TodoListItem').at(0).prop('handleDelete');
        expect(handleDelete).toEqual(expect.any(Function));

        const handleToggle = wrapper.find('TodoListItem').at(1).prop('handleToggle');
        expect(handleToggle).toEqual(expect.any(Function));
     }); 
})