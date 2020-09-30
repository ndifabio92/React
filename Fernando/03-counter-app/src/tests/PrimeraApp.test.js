import '@testing-library/jest-dom';
import React from 'react';
// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PimeraApp />', () => {
    
    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
        
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })

    test('debe mostrar <PrimerApp /> correctamente', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } />);

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo = { saludo } 
                subtitulo = { subTitulo } 
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo.trim() ).toBe( subTitulo );

    })
    
    
    
})
