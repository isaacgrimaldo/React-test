import React from 'react';
import'@testing-library/jest-dom';
import {shallow} from 'enzyme';

import {AddCategory} from '../../components/AddCategory';

describe('Pruebas del archivo AddCategory.js', () => {
    
    const setCategories =jest.fn();//genera una funcion con jest:
    let wrapper = shallow( <AddCategory setCategories = {setCategories}/>);
   
    beforeEach( () =>{
        jest.clearAllMocks();//limpioa todas las simulaciones
        wrapper = shallow( <AddCategory setCategories = {setCategories}/>);
    })


    test('Debe de mostrar se correctamente su HTML', () => {
       expect(wrapper).toMatchSnapshot();
   });

   test('Bebe de ejecutar se correctamente el evento de handleInputChange', () => {
       
       const input = wrapper.find('input');
       const value = 'Hola Mundo';
       input.simulate('change',{target:{ value }});
       
       expect(wrapper.find('p').text().trim()).toBe(value);
   });

   test('No debe de llamar ala function setCategories sin los datos estan incompletos', () => {
       const form = wrapper.find('form');
       form.simulate('submit', {preventDefault(){}});
        
       expect( setCategories ).not.toHaveBeenCalled();
   })

   test('Debe de llamar a setCategories y limpiar la caja de texto', () => {
      const value = 'Cambio'; 
      wrapper.find('input').simulate('change',{target:{ value }});
      wrapper.find('form').simulate('submit', {preventDefault(){}});
      
      expect(setCategories).toHaveBeenCalled();
      expect(setCategories).toHaveBeenCalledTimes(1); // cuantas veces fue llamada
      expect(setCategories).toHaveBeenCalledWith(expect.any(Function)) // Verifica argumentos
      const txtBox = wrapper.find('input').prop('value');
      expect(txtBox.length).toBe(0);

   })
}) 