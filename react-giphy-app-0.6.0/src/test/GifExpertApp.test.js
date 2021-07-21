import React from 'react';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';
import {shallow} from 'enzyme';

describe('Pruebas de componente GifExpertApp.js', () => {
    
    const wrapper = shallow( <GifExpertApp /> );

    test('Debe de mostrase correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe renderizar las defaultCategorys correctamente ', () => {
       const category = ['Goku', 'Bad bunny'];
       const wrapper = shallow( <GifExpertApp defaultCategorys ={category} />)
        
       expect(wrapper.find('AddCategory').exists()).toBe(true);
       expect(wrapper.find('GifGrid').length).toBe(category.length);
    });  
})


