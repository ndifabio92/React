import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-templete-string";

describe('Prueba en 02-templete-string', () => {

    test('getSaludo debe retornar hola fernando', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo( nombre );
        expect( saludo ).toBe( 'Hola ' + nombre );
    })
    
    // getSaludo debe retornar hola carlos si no hay argumento nombre

    test('getSaludo debe retornar hola carlos si no hay argumento nombre', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe( 'Hola Carlos');
    })
})