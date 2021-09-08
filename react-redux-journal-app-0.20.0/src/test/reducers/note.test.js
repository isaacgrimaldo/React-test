import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { startNewNote } from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firebase-config';

const middlewares = [thunk];
const  mockStore =  configureStore(middlewares)



const store = mockStore({
    auth: {
        uid: 'testing',
        name: 'isacc Grimaldo'
      },
})

describe('Pruebas en la action note.js', () => {

    test('Debe de realizar la action startNewNote', async () => {
        
        await store.dispatch( startNewNote() );

        const actions = store.getActions();
        const {auth:{uid}} = store.getState(); 

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload:{
                id: expect.any(String),
                title:'',
                body:'',
                date:expect.any(Number)
            }
        });

        expect(actions[1]).toEqual({
             type:types.notesAddNew,
             payload:{
                id:expect.any(String),
                title:'',
                body:'',
                date:expect.any(Number)
             }
        })
           
        const { payload: {id } } =  actions[0]
        
       await db.doc(`${ uid }/journal/notes/${ id }`).delete();
    });
    
});