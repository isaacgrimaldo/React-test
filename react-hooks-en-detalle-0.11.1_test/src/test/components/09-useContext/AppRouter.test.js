import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebad del archivo AppRouter.js', () => {
    
    const user = {
        id:127,
        name: 'John',
    }

    const wrapper = mount(
        <UserContext.Provider
          value = {{
              user
          }}
        >
            <AppRouter/>
        </UserContext.Provider>
    );
    
    test('Debe de renderizar el component correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });
});