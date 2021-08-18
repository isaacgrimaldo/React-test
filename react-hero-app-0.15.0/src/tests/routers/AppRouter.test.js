import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';


describe('Pruebas del componente <AppRouter>', () => {
     
    const testContext = {
        dispatch : jest.fn(),
        user:{
            logged: false
        }
    } 


    test('Debe de mostrar el login si no esta aunteticado', () => {
          
        const wrapper = mount(
        <AuthContext.Provider
           value = {testContext}
        >
          <AppRouter/>    
        </AuthContext.Provider>)

         expect(wrapper).toMatchSnapshot();
         expect(wrapper.find('h1').text().trim()).toBe('Login');
    });

    test('debe de mostar el componente de Marvel', () => {
        const testContext = {
            dispatch : jest.fn(),
            user:{
                name: 'Isaac',
                logged: true
            }
        } 

    const wrapper = mount(
        <AuthContext.Provider
        value = {testContext}
        >
        <AppRouter/>    
        </AuthContext.Provider>)

        expect(wrapper.find('.navbar').exists()).toBe(true);
    });
  
}) 