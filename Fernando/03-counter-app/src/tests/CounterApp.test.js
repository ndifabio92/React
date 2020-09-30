import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterAPP />', () => {
    
    const wrapper = shallow( <CounterApp />);

    test('debe de mostrar <CounterApp /> correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow( <CounterApp value = { 100 } /> );
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('100');

    });

    test('debe de incrementar con el boton +1', () => {

        const counterTextBefore = wrapper.find('h2').text().trim();

        wrapper.find('button')
            .at(0)
            .simulate('click');

        const counterTextAfter = wrapper.find('h2').text().trim();

        expect( ( counterTextBefore * 1 ) + 1 ).toBe( ( counterTextAfter * 1 ) );
    });
    
    test('debe de incrementar con el boton -1', () => {

        const counterTextBefore = wrapper.find('h2').text().trim();

        wrapper.find('button')
            .at(2)
            .simulate('click');

        const counterTextAfter = wrapper.find('h2').text().trim();

        expect( ( counterTextBefore * 1 ) - 1 ).toBe( ( counterTextAfter * 1 ) );
    });

    test('debe de colocar el valor por defecto con el btn reset', () => {

        const wrapper = shallow( <CounterApp value = { 100 } /> );
        wrapper.find('button')
            .at(1)
            .simulate('click');
        
            const counterText = wrapper.find('h2').text().trim();

            expect( counterText ).toBe('100');
    });
})
