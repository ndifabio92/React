import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-aweit y Fetch', () => {
    
    test('debe de retornar el url de la imagen', async () => {
        const url = await getImagen();
        expect( url.includes('https://') ).toBe( true );
    });
    
});
