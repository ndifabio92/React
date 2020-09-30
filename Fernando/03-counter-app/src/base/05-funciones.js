// Funciones en JS
const saludar = function( nombre ) {
    return `Hola ${ nombre }`
};

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`; 

// console.log( saludar('Nicolas') );
// console.log( saludar2('Nicolas') );
// console.log( saludar3('Nicolas') );

export const getUser = () => (
    {
        uid: 'ABC123',
        username: 'El_Papi1502',
    }
)

// console.log( getUser() )

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }

export const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
// console.log( usuarioActivo );