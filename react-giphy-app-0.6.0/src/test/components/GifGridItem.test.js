import React from 'react';
import'@testing-library/jest-dom';
import {shallow} from 'enzyme'; 

import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebad del documento GifGridItem.js', () => {
    
    const title = 'hola';
    const url   = 'http://localhost:8080/images.png';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    
    test('Debe mostrar correctamente el HTML con su propiedades', () => {
       expect(wrapper).toMatchSnapshot();
     })
    
     test('El title debé de mostrar correctamente', () => {
         const p = wrapper.find('p').text().trim();
         expect(p).toBe(title);
     })

     test('propiedades de img debén mostrase correctamente', () => {
         const img = wrapper.find('img');
         expect(img.prop('src')).toBe(url);
         expect(img.prop('alt')).toBe(title);         
     })

     test('El contenedor de la imagen debe tener la classe animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);
     });

});