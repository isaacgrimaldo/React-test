import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import {MultipleCustomHooks} from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Puebas del componente MultipleCustomHooks', () => {


     test('Debe de mostarse correctamente el componete', () => {

        useCounter.mockReturnValue({
            counter: 10, 
            increment : () => {},
           })

        useFetch.mockReturnValue({ 
           data:null, 
           loading:true,
           error:null       
        })

        const wrapper = shallow( <MultipleCustomHooks/> );
        expect(wrapper).toMatchSnapshot();
     });

     test('debe de mostrar informacion resivada', () => {
       useFetch.mockReturnValue({
           data:[
               {
                   author:'Isaac', 
                   quote:'Hola Mundo'
               }  
          ],
           loading:false,
           error:null,
       });

       const wrapper = shallow( <MultipleCustomHooks/> );
       expect(wrapper.find('.alert').exists()).toBe(false);
       expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
     });
});