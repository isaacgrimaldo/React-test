import '@testing-library/jest-dom';
import {todoReducer} from '../../../components/08-useReducer/todoReducer';

import {todos , types} from '../../fixtures/todoList';

describe('Pruebas del Archivo todoReducer', () => {
    

    test('debe devoler el estado que le pasa por defecto', () => {
        const state = todoReducer( todos , {} );
        expect(state).toEqual(todos);
    });
    
    test('debe de agregar un todo a al estado', () => {
        const testTodo =  {
            type:types.add,
            payload:{
                id:3,
                desc:'Aprender SQL',
                done:false
            }
        }
        const state = todoReducer( todos , testTodo);
        const {payload} = testTodo;
        expect(state.find( t => t.id === payload.id)).toEqual(payload); 
        expect(state.length).toBe(todos.length + 1);
        expect(state).toEqual([ ...todos , payload]);
    });

    
    test('debe de retornar el mismo state si no encuetras el id del todo a cambiar', () => {
        const testAction1 = {
            type: types.delete,
            payload: 10,
        };
        const testAction2 = {
            type: types.delete,
            payload: 14,
        };

        const state1 = todoReducer(todos , testAction1);
        const state2 = todoReducer(todos , testAction2);
          
        expect(state1).toEqual(todos);
        expect(state1.length).toEqual(todos.length);

        expect(state2).toEqual(todos);
   });

    test('debe de borrar el todo especifico', () => {
     
        const testAction = {
            type: types.delete,
            payload: 1,
        } 
        const state = todoReducer(todos, testAction);
        const {payload} = testAction;
        expect(state.find(t => t.id === payload )).toBe(undefined);
        expect(state.length).toBe( todos.length -1);
    });

    test('debe de TOGGEL al todo especifico sin afectar a los demas todos', () => {
         
        const testAction = {
             type:types.toggle,
             payload: 1
         };

         const {payload} = testAction;
         const state =  todoReducer( todos , testAction);
         const { done } = state.find( t => t.id === payload);
         expect(done).toBe(true);
         expect(state[1]).toEqual(todos[1]);
    });
});