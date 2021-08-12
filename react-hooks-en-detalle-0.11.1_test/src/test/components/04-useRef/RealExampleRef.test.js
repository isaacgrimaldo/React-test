import React , {useState}  from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'; 
import {renderHook , act} from '@testing-library/react-hooks'

import {RealExampleRef} from '../../../components/04-useRef/RealExampleRef';



describe('Pruebas del componente RealExampleRef', () =>{
   
    const wrapper =  shallow( <RealExampleRef/> );
    
    test('Debe de mostrarse correctamente el componente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    }); 

    test('Debe de mostrar el componente <MultipleCustomHooks />', () =>{ 
        
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});

