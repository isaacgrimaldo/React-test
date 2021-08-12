import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import {HookApp} from '../HookApp.js'

describe('Pruebas del archivo HookApp', () => {
    
    const wrapper = shallow( <HookApp/> )
    
    test('Debe de renderizar correctamente el componente', () => {
           expect(wrapper).toMatchSnapshot();
      });
});