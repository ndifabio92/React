// Desestructuracion
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man',
    rango: 'Soldado',
}

// const { nombre:nombre2, edad, clave } = persona;

// console.log( nombre2 )
// console.log( edad )
// console.log( clave )

const useContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // console.log( nombre, edad, rango )
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.1231,
            lng: -12.1231,
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );
// console.log( avenger );
console.log( lat,lng );