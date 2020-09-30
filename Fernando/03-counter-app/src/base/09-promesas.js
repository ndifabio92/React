import { getHeroeById } from './08-imp-exp'

// const promesa = new Promise( ( resolve, reject ) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve( heroe );
//         // reject( heroe );
//     }, 2000);
// });

// promesa
//     .then( ( heroe ) => {
//         console.log( heroe )
//     })
//     .catch( err => console.warn( err ));

export const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            const p1 = getHeroeById( id );
            if( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el heroe' );
            }
        }, 1000);
    });

}

// getHeroeByIdAsync(4)
//     .then( console.log )
//     .catch( console.warn )