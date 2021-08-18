import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Pruebas del componente <PrivateRouter />', () => {
    
   const props = {
       location:{
           pathname:'marvel'
       }
   } 

   Storage.prototype.setItem = jest.fn();

    test('Debe de Mostrar el componente si esta autenticardo y guardar localStorage', () => {    
          
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated = { true }
                    component = { () => <span>listoooo!!!</span>}
                    { ...props }
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', 'marvel');
    });

    test('Debe de bloquear el componente si no esta autenticado', () => {
       
        const wapper = mount(
        <MemoryRouter>
              <PrivateRoute
                  isAuthenticated = {false}
                  component = { () => <span>No estas</span>}
                  { ...props }
              />
        </MemoryRouter>);

        expect(wapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', 'marvel');

    });
});