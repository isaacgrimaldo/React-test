import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import { MemoryRouter, Router } from 'react-router-dom';
import { testContext } from '../../features/testContex';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas en el componente <Navbar/>', () => {
    
    const context = testContext;
    const historyMock = { //Falceamos la funcion que nostros no creamos para ver su implemetacion
        push: jest.fn(),
        listen: jest.fn(),
        replace: jest.fn(),
        location: {},
        createHref: jest.fn()
    } 
   
    const wrapper = mount(
   <AuthContext.Provider
       value = {context}
   >
       <MemoryRouter>
            <Router history = {historyMock}>
              <Navbar/>       
            </Router>
       </MemoryRouter>
    </AuthContext.Provider>
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Debe de mostrar el componente correctamente', () => {

         const { user:{name} } =  context;

         expect(wrapper).toMatchSnapshot();
         expect(wrapper.find('.text-info').text()).toBe(name);
    });

    it('debe de llamar al dipach  con el loggout y hacer la recolocacion del la pagina', () => {
         
        wrapper.find('button').simulate('click');

        expect(context.dispatch).toHaveBeenCalledWith({
            type:types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });
});