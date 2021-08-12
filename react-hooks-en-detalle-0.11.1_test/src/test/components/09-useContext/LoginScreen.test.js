import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Prueba del LoginScreen.js', () => {
     
    const testUser = {
        id: 123,
        name: 'Fernando'
    };
    const setUser = jest.fn(() => {testUser});
    
    const wrapper = mount(
        <UserContext.Provider
          value={{
              setUser
            }}
        >
            <LoginScreen />
        </UserContext.Provider>
    );
    
    test('Debe de renderizar el componemte correctamente', () => {
         
       expect(wrapper).toMatchSnapshot(); 
    });

    test('Debe de llamar correctamente a la funcion setUser con los agumentos esperados', () => {
        wrapper.find('button').simulate('click');
        
        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith(expect.any(Object));
        expect(setUser).toHaveBeenCalledWith({
            name:testUser.name,
            id:testUser.id,
        });
    });
});
