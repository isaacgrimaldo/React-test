import '@testing-library/jest-dom';
import { types } from '../../types/types';

describe('Pruebas del archivo types.js', () => {
    
    test('Debe ser ser correctos los types', () =>{
       
        const testTypes = {

            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',
        
            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Updated note',
            notesFileUrl: '[Notes] Updated image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
        
        }

        expect(types).toEqual(testTypes);
    });
});
