import '@testing-library/jest-dom';
import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe('Pruebas en funciones de Heroes', () => {

    test('debe de retoarnar un heroe por id ', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroesData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroesData );
    })

    test('debe de retoarnar un undefined si heroe no existe', () => {
        
        const id = 100;
        const heroe = getHeroeById( id );
        expect( heroe ).toBe( undefined );
    })
    
    test('debe de retornar un arreglo con los heroes de dc', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData );
    })

    test('debe de retornar un arreglo con los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
    })
    
})