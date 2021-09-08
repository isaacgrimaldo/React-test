import '@testing-library/jest-dom';
import { notesReducer } from '../../reducers/notesReducer';
import { types } from '../../types/types';
import { notes as testNotes } from '../features/notes';

describe('Pruebas del archivo noteReducer.js', () => {

    const testNote = {
        id:4, 
        date:new Date().getDate(), 
        title:'testTitle', 
        body:'bodyTitle', 
        url:'https://res.cloudinary.com/apimedia/image/upload/v1624241624/dvty2zfcnpkkri6pnku8.jpg',
    }

    const initialState = {
        notes: [],
        active: null
    }
     
    test('Debe de regresar el estado inicial del reducer', () => {
         const state = notesReducer(  initialState , {} );
         expect(state).toEqual(initialState)
    });

    test('Debe de realizar la accion de notesActive y cambiar el estado de la aplicacion' , () => {
        
        const testAction = {
            type: types.notesActive,
            payload: {
                ...testNote
            }
         }
         const state = notesReducer(initialState , testAction );
        
         expect(state.active).toEqual(testNote);
    });

    test('Debe de realizar la acción de notesAddNew y cambiar el estado de la aplicación', () => {
        
        const initialState = {
            notes: testNotes ,
            active: null
        }

        const testAction = {
            type: types.notesAddNew,
            payload: {
                ...testNote
            }
         }
         
         const state = notesReducer(initialState , testAction );
         const { notes } = state;

         expect(notes).toEqual([
             testNote,
              ...initialState.notes,
         ])
    });

    test('Debe de realizar la acción de notesLoad y cambiar el estado de la aplicación', () => {
        
        const initialState = {
            notes: [] ,
            active: null
        }

        const testAction = {
            type: types.notesLoad,
            payload:testNotes
         }
         
         const state = notesReducer(initialState , testAction );
         const { notes } = state;

         expect(notes).toEqual(testNotes);
    });

    test('Debe de realizar la acción de notesUpdated y cambiar el estado de la aplicación', () => {
        
        const initialState = {
            notes: testNotes ,
            active: null
        }
           
        const testUploadNote = {
            id:1, 
            date:new Date().getDate(), 
            title:'testTitle2', 
            body:'bodyTitle2', 
            url:'https://res.cloudinary.com/apimedia/image/upload/v1619472241/rl2l1akxjempi11exhgj.png',
        } 

        const testAction = {
            type: types.notesUpdated,
            payload:{
                id: testUploadNote.id,
                note:{
                    id:testUploadNote.id,
                    ...testUploadNote
                }
            }
         }
         
         const state = notesReducer(initialState , testAction );
         const { notes } = state;
         
         const notechanged = notes.filter(note => note.id === testUploadNote.id );
         expect(notechanged).toEqual([testUploadNote]);
    });

    test('Debe de realizar la acción de notesDelete y cambiar el estado de la aplicación', () => {
        
        const initialState = {
            notes: testNotes ,
            active: null
        }
           
        const testIdNote = 3; 

        const testAction = {
            type: types.notesDelete,
            payload: testIdNote,
         }
         
         const state = notesReducer(initialState , testAction );
         const { notes } = state;
         
         const noteDeleted = notes.filter(note => note.id === testIdNote );
         expect(noteDeleted).toEqual([]);
    });

    test('Debe de realizar la acción de notesLogoutCleaning y cambiar el estado de la aplicación', () => {
        
        const initialState = {
            notes: testNotes ,
            active: null
        }

        const testAction = {
            type: types.notesLogoutCleaning,
         }
         
         const state = notesReducer(initialState , testAction );
         
         expect(state).toEqual({ active: null,notes: []})
    });
});
