import '@testing-library/jest-dom';
import { finishLoading, removeError, setError, startLoading } from '../../actions/ui';
import { types } from '../../types/types';


describe('Pruebas en la action ui.js', () => {
     
    test('Debe de regresar correctamente todos los errores', () => {
        const err = 'ERROR500' 
        const setErrortest = setError(err);
        
         expect(setErrortest).toEqual({
            type: types.uiSetError,
            payload: err
         })
        
         const removeErrortest   = removeError ()
         const startLoadingtest  = startLoading ()
         const finishLoadingtest = finishLoading ()

         expect(removeErrortest).toEqual({  type:types.uiRemoveError })
         expect(startLoadingtest).toEqual({ type:types.uiStartLoading })
         expect(finishLoadingtest).toEqual({type:types.uiFinishLoading })
    });
});