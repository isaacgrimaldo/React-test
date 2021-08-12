import React from 'react';
import '@testing-library/jest-dom';
import {mount} from 'enzyme';

import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas del archivo HomeScreen.js ', () => {
      
    const user = {
        name: 'Isaac',
        email: 'Isaac@gmail.com',
    };

    const wrapper = mount(  //Como queremos renderizar tambien el componente hijo se usa el mount y no shallow 
           <UserContext.Provider
              value = {{ 
                    user  
              }}
           >
              <HomeScreen />
           </UserContext.Provider>
      );

      test('Debe de renderizar correctamente el componente', () => {
           expect(wrapper).toMatchSnapshot();
      });

});