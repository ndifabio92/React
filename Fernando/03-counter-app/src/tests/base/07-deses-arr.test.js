import '@testing-library/jest-dom';
import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en desestructuracion,', () => {

    test('debe retornar un string y un numero ', () => {
        const [ letras, numeros ] = retornaArreglo();
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );
        expect( numeros ).toEqual( 123 );
        expect( typeof numeros ).toBe( 'number' );
    })
    
})