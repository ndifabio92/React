import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGitfs';
jest.mock('../../hooks/useFetchGitfs');

describe('Pruebas en el <GrifGrid/>', () => {

    const category = 'One Punch';

    test('debe de mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category = { category }/> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category = { category }/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
})