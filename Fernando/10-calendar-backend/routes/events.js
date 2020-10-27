/**
    Event Routes
    /api/events
 */
const { Router } = require('express');
const router = Router();
const { isDate } = require('../helpers/isDate');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');

// Todas las rutas tienen que pasar por la validacion del JWT
router.use( validarJWT );

// Obtener eventos
router.get( '/', getEventos );

// Crear un nuevo evento
router.post('/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatorio').custom( isDate ),
        check('end','Fecha de finalizacion es obligatorio').custom( isDate ),
        validarCampos
    ],
crearEvento );

// Actualizar Evento
router.put('/:id',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatorio').custom( isDate ),
        check('end','Fecha de finalizacion es obligatorio').custom( isDate ),
        validarCampos
    ], 
actualizarEvento );

// Eliminar Evento
router.delete('/:id', eliminarEvento );


module.exports = router;