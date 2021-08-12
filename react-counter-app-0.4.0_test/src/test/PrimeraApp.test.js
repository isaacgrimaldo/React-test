import React from 'react';
import'@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas del componente <PrimeraApp />' , () => {
   test('<PrimeraApp/> Debe mostrase correctamente', () => {
      const saludo = 'Hola Soy Goku!!!'; 
      const  wrapper = shallow( < PrimeraApp saludo = {saludo} /> );

      expect(wrapper).toMatchSnapshot();
   });

   test('<PrimeraApp /> Debe mostrar el subtitulo correctamente', () =>{
    const saludo = 'Hola Soy Goku!!!';   
    const sub = 'Soy un subtitulo';
    const wrapper = shallow( < PrimeraApp 
               saludo = {saludo} 
               subtitulo = {sub}
            />);
     const textSub = wrapper.find('p').text().trim();
     expect(sub).toBe(textSub);
   })
});