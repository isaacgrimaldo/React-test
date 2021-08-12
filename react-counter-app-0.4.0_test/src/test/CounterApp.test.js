import React from 'react';
import'@testing-library/jest-dom';
import  {shallow}  from 'enzyme';

import CounterApp from './../CounterApp';

describe('Prueva del archivo CounterApp.js', () =>{
    let wrapper = shallow( <CounterApp/> ); // Variables globales;
    
    beforeEach( () => { // Se ejecuta antes de cada prueba 
          wrapper = shallow( <CounterApp/> );
    })
   

    test('<CounterApp/> Debe renderizarce correctamente el HTML con los valores por defecto', () => {
       expect(wrapper).toMatchSnapshot();
     });

     test('<CounterApp/> Debe mostrar correctamente la propiedad "value"', () => {
         const testValue = 100;
         const wrapper = shallow( <CounterApp value={testValue}/> );
         const  counter = wrapper.find('h2').text().trim();
         expect(counter).toBe('100');
     });

     test('Debe de funcionar el boton +1', () =>{
        wrapper.find('button').at(0).simulate('click');
        const  counter = wrapper.find('h2').text().trim();
        expect(counter).toBe('11');
     });

     test('Debe de funcionar el boton -1', () =>{
        wrapper.find('button').at(2).simulate('click');
        const  counter = wrapper.find('h2').text().trim();
        expect(counter).toBe('9');
     });

    test('Debe de funcionar el botón rest', () =>{
        const wrapper = shallow( <CounterApp value={150}/> );
        
        for(let i=0; i < 10; i++  ){
            wrapper.find('button').at(0).simulate('click');
        };
        for(let i=0; i < 5; i++  ){
            wrapper.find('button').at(2).simulate('click');
        };

        wrapper.find('button').at(1).simulate('click');

        const counter = wrapper.find('h2').text().trim();
 ;      expect(counter).toBe('150')
    })

;
})