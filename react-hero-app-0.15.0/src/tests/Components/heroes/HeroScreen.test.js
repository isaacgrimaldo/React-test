import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router';

describe('Pruebas de componente <HeroScreen/>', () =>{
    
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }


    it('Debe de Mostrat el Redirect si no hay informacion en la URL', () => {

        
        const wrapper = mount(
        <MemoryRouter initialEntries = {['/hero']}>
            <HeroScreen history = { history }/>
        </MemoryRouter>
        ); 
       
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });    

    it('Debe de mostrar el heroe pasado por la url', () => {
       
        
    const wrapper = mount(
        <MemoryRouter initialEntries = {['/hero/marvel-silver']} /*Simula la ruta Actual del componente*/>  
            <Route exact path='/hero/:heroeId' component = { HeroScreen }  />
        </MemoryRouter>
        ); 
      
      expect(wrapper.find('.row').exists()).toBe(true);     
    });

    test('Dede de  llamar solo ala function PUSH del history cuando se hace click', () => {
        
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter initialEntries = {['/hero/marvel-silver']} /*Simula la ruta Actual del componente*/>  
                <Route exact 
                    path='/hero/:heroeId' 
                    component = {  () => <HeroScreen history = { history } /> /* Se hace para poder renderizar el componente dentro del mount */ }  
                    />
            </MemoryRouter>
            ); 
        
            wrapper.find('button').prop('onClick')();
            
            expect(history.push).toHaveBeenCalledWith('/');
            expect(history.goBack).not.toHaveBeenCalled();
    });

    test('Debe de llamar solo ala function goBack del history cuando se hace click', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries = {['/hero/marvel-silver']} /*Simula la ruta Actual del componente*/>  
                <Route exact 
                    path='/hero/:heroeId' 
                    component = {  () => <HeroScreen history = { history } /> /* Se hace para poder renderizar el componente dentro del mount */ }  
                    />
            </MemoryRouter>
            ); 
        
            wrapper.find('button').prop('onClick')();
            
            expect(history.goBack).toHaveBeenCalled();
            expect(history.push).not.toHaveBeenCalled();
    });
    
});
