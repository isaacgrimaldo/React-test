import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en el compontent <DashboardRoutes/>', () => {
    
    const testContext = {
        dispatch : jest.fn(),
        user:{
            logged: true, 
            name:'Isaac'
        }
    };

    it('Debe de mostrar mostrar el componente correctamente', () => {
        
        const wrapper = mount(    
        <AuthContext.Provider
           value = { testContext }
        >   
         <MemoryRouter>
             <DashboardRoutes/>
         </MemoryRouter>
        </AuthContext.Provider>);
         
         const { name } = testContext.user

         expect(wrapper).toMatchSnapshot();
         expect(wrapper.find('.text-info').text()).toBe(name);
    });
            
});
