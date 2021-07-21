import React from 'react';
import'@testing-library/jest-dom';
import {shallow} from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs') // Para controlar la informacion que le estamos mandando

describe('Puebas de archivo GifGrid', () => {
    const category ='Goku';
    
    test('Bebe de mostrar se correctamente el componente', () => {
         
        useFetchGifs.mockReturnValue({ 
            data:[],
            loading: true
        });

        const wrapper  =  shallow( <GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de moratrar la informacion que viene de useFetchGifs', () => {
        
        const gifs = [
            {
                id:'ABC',
                url:'http://localhost/lago.png',
                title:'Algo papa'
            }
         ]
        useFetchGifs.mockReturnValue({ 
            data:gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category ={ category }/> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    })
})