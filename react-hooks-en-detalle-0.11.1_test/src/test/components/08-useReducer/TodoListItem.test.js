import React from 'react';
import '@testing-library/jest-dom';

import {todos} from '../../fixtures/todoList';
import {shallow} from 'enzyme';
import {TodoListItem} from '../../../components/08-useReducer/TodoListItem'

describe('Pruebas del archivo TodoListItem', () =>{
    
    const handleDelete =  jest.fn(); 
    const handleToggle =  jest.fn();  

    let wrapper = shallow(<TodoListItem 
         index = {0} 
         todo  = { todos[0]}
         handleDelete = {handleDelete}
         handleToggle = {handleToggle}
     />);
      
     beforeEach(() =>{
          jest.clearAllMocks();
          wrapper = shallow(<TodoListItem 
            index = {0} 
            todo  = { todos[0]}
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
          />)
      });

    test('debe de mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });
     
    test('Debe de llamar ala funcion handleDelet', () => {
          wrapper.find('button').simulate('click');
          expect(handleDelete).toHaveBeenCalled();
          expect(handleDelete).toHaveBeenCalledWith(todos[0].id);
    });

    test('Debe de llamar ala funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenCalledWith(todos[0].id);
    });
    
    test('Debe de mostrar correctamente el parrafo', () => {
         const testText = wrapper.find('p').text().trim();
         expect(testText).toBe(`1. ${todos[0].desc}`);
    });

    test('Debe de agregar se la clase "complete" si el todo.done = true', () => {
        
        const taskComplete  = {
            id:1,
            desc:'Aprender Node.js',
            done:true,    
        }
        
        const wrapper2 = shallow(<TodoListItem 
            index = {0} 
            todo  = {taskComplete}
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
        />);

        expect(wrapper2.find('p').hasClass('complete')).toBe(true);
    });
});  