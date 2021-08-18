import '@testing-library/jest-dom';

import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas del archivo authReducer.js', () => {
    
     test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({} , '');
        
        expect(state).toEqual({});
     }); 

     test('debe de autenticar y colocar el name del usuario', () => {
        
        const testAction =  {
            type: types.login,
            payload:{
                name:'Isaac ZZZ'
            }
        };
         
        const state = authReducer({ }, testAction);

        const { name , logged } = state;
        
        expect(name).toBe(testAction.payload.name);
        expect(logged).toBe(true);
     });

     test('debe de borrar el name del usuario y poner en false el logged', () => {
        
         const testState = {
            name: 'Fernando',
            logged: true
        }

        const testAction = {
            type: types.logout,
        }  

        const state = authReducer( testState ,  testAction)
        const { name , logged } = state;

        expect(name).toBe(undefined);
        expect(logged).toBe(false);
     });
});