import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';


describe('Pruebas del archivo authReducer.js' , () =>{
   
    const testData = { displayName:'test', uid:'testLlalaa' };

    test('Debe de inicializar con el estado por defecto', () => {
        const state = authReducer(  { } , { } );
         expect(state).toEqual({});
    });

    test('Debe hacer login y cambiar el estado', () => {
        
        const testAction = {
            type:types.login,
            payload:{
                displayName: testData.displayName,
                uid: testData.uid
            },
        }
        const state = authReducer({} ,  testAction );
        const {name ,  uid } =  state; 

        expect(name).toBe(testData.displayName);
        expect(uid).toBe(testData.uid);
    });
    
    test('Debe hacer logout y cambiar el estado', () => {
        
        const testAction = {
            type:types.logout,
        }
        const state = authReducer( testData ,  testAction );
        
        expect(state).toEqual({});
    });

    test('Debe de regresar el mismo estado si la accion no esta definida', () => {
        
        const testAction = {
            type:'ddddd',
        }
        const state = authReducer( testData ,  testAction );
        
        expect(state).toEqual(testData);
    });
});