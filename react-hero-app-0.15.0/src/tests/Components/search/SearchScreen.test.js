import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';

import { SearchScreen } from '../../../components/search/SearchScreen';
import { history } from '../../features/testContex'

describe('Pruebas del componente SearchScreen.js', () => {
    
    it('Debe de mostrar correctamente el componete', () => {
        
        const wrapper = mount(
             <MemoryRouter initialEntries ={['/search']}>
                  <Route exact path='/search' component = { SearchScreen } />
             </MemoryRouter>
        );

        expect(wrapper.find('h1').text().trim()).toBe('Search Screen');
        expect(wrapper).toMatchSnapshot();
    });
       
    it('Debe de cambiar el valor del input y este tiene que ser el mismo que hay en la URL', () =>{
        const wrapper = mount(
            <MemoryRouter initialEntries ={['/search?q=Hulk']}>
                 <Route exact path='/search' component = { SearchScreen } />
            </MemoryRouter>
       );
       
       expect(wrapper.find('input').prop('value')).toBe('Hulk');
       expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar un error cuando el heroe no se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries ={['/search?q=noHERO']}>
                 <Route exact path='/search' component = { SearchScreen } />
            </MemoryRouter>
       );

       expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no a hero with noHERO');
       expect(wrapper).toMatchSnapshot();
    });

    test('Dede de hacer los cambio correctamente en el input y debe llamar al push cuando se hace Submit', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries ={['/search']}>
                 <Route exact path='/search' component = { () => <SearchScreen history = { history  }/> } />
            </MemoryRouter>
       );
       
       wrapper.find('input').simulate('change',{
           target:{
               name:'searchText',
               value:'Hulk'
           }
       });
       
       wrapper.find('form').prop('onSubmit') ({
        preventDefault(){}
     }) 
       
       const { push } = history;
       expect( push ).toHaveBeenCalledWith(`?q=Hulk`)       
    });
});