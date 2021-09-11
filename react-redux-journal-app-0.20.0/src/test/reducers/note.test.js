import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';

const imgTets = 'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png'

jest.mock('../../helpers/fileUpload', () =>({
   fileUpload:jest.fn(() => {
       return 'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png';
   })    
}));


const middlewares = [thunk];
const  mockStore =  configureStore(middlewares)

const initialState = {
    auth: {
        uid: 'testing',
        name: 'isacc Grimaldo'
      },
      notes:{
        active:{
            id:'1M1xzrNPc79BKWfcK2Wx',
            title:'Hola',
            body:'tetsURL',
        },
      }
};

let store = mockStore( initialState );

describe('Pruebas en la action note.js', () => {

    const testMachNoteObject = {
        title: expect.any(String),
        body:expect.any(String),
        date: expect.any(Number),
    }

    const testNoteSave ={
        id:'1M1xzrNPc79BKWfcK2Wx',
        title:'Hola Mundo',
        body:'Nota Salvada',
        date: new Date().getTime()
    }

    const {auth:{uid}} = store.getState();

    beforeEach( () => {
         store = mockStore( initialState );
    });

    test('Debe de realizar la actions startNewNote', async () => {
        
        await store.dispatch( startNewNote() );
        const actions = store.getActions(); 
        
        //prueba del active note activeNote
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload:{
                id: expect.any(String),
                title:'',
                body:'',
                date:expect.any(Number)
            }
        });
          
        //Prueba de addNewNote
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
     
    test('Debe de realizar la accion startLoadingNotes', async() => { 
        await store.dispatch( startLoadingNotes(uid) );
        const actions = store.getActions();
         
        expect(actions[0]).toEqual({
            type:types.notesLoad,
            payload: expect.any(Array)
        })
        
        expect(actions[0].payload[0]).toMatchObject( testMachNoteObject );
    });

    test('Debe de realizar la action startSaveNote', async() => { 
        await store.dispatch( startSaveNote( testNoteSave ) );
        const actions = store.getActions();

        await db.doc(`${ uid }/journal/notes/${ testNoteSave.id }`).get();
    
        expect(actions[0].type).toBe(types.notesUpdated);
        expect(actions[0].payload.note).toMatchObject( testMachNoteObject );
        expect(actions[0].payload.note.title).toBe( testNoteSave.title );
    });
     
    test('Debe de disparar la actions y cambiar  ', async () => {
      
        const testFile = new File([], 'foto.png');

       try {
        await  store.dispatch( startUploading(testFile) );
        const docRef = await db.doc(`${ uid }/journal/notes/1M1xzrNPc79BKWfcK2Wx`).get();
        
        expect(docRef.data().url).toBe(imgTets);
       } catch (error) {
         console.log(error);   
       }
    })
    

});