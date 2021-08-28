import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../auth/AuthContext';
import { testContext ,  history } from '../../features/testContex';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';


describe('Pruebas del componente LoginScreen.js' , () => {
    

    let wrapper = mount( 
        <AuthContext.Provider
           value = {
            testContext          
           }
        >
           <MemoryRouter>
              <LoginScreen history = { history} />
           </MemoryRouter>
        </AuthContext.Provider>
    )
    
    beforeEach(() => {
       
        wrapper = mount( 
            <AuthContext.Provider
               value = {
                testContext          
               }
            >
               <MemoryRouter>
                  <LoginScreen history = { history} />
               </MemoryRouter>
            </AuthContext.Provider>
        )
    });

   test('Debe de Mostarse correctamnete', () => {
        expect(wrapper).toMatchSnapshot();
   });
  
   test('Bebe de llamar al dispach y hacer la navegacion llamando o no las localStorage ', () => {
       const handleLogin = wrapper.find('button').prop('onClick');

        handleLogin();
        const { dispatch } =  testContext
        const { replace } = history

        expect(dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload:{
                name:'Fernando'
            }
        });
        expect(replace).toHaveBeenCalledWith('/');
         
        localStorage.setItem('lastPath', '/dc');
        handleLogin();
        expect(replace).toHaveBeenCalledWith('/dc');
   });
});