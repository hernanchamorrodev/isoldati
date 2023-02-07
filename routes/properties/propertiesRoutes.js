import express from 'express';

import { body } from 'express-validator';

import { myProperties, propertiesCreate, propertiesSave } from '../../controllers/properties/propertyController.js';



const router = express.Router();

// Propiedades
// router.get('/properties', properties)

// Mis propiedades
router.get('/my-properties', myProperties)

// Crear propiedades
router.get('/properties/new', propertiesCreate)
router.post('/properties/new', 
    body('titulo').notEmpty().withMessage('El titulo es obligatorio').bail()
        .isLength({min: 5}).withMessage('El titulo debe tener al menos 5 caracteres'),
    body('descripcion').notEmpty().withMessage('La descripcion es obligatoria').bail()
        .isLength({min: 20}).withMessage('La descripcion debe tener al menos 20 caracteres'),
    body('categoria').notEmpty().withMessage('La categoria es obligatoria'),
    
    body('precio').notEmpty().withMessage('El precio es obligatorio').bail()
        .isNumeric().withMessage('El precio debe ser un numero'),
    body('ubicacion').notEmpty().withMessage('La ubicacion es obligatoria'),
    body('habitaciones').notEmpty().withMessage('El numero de habitaciones es obligatorio').bail()
        .isNumeric().withMessage('El numero de habitaciones debe ser un numero'),
    body('baños').notEmpty().withMessage('El numero de baños es obligatorio').bail()
        .isNumeric().withMessage('El numero de baños debe ser un numero'),
    body('estacionamientos').notEmpty().withMessage('El numero de estacionamientos es obligatorio').bail()
        .isNumeric().withMessage('El numero de estacionamientos debe ser un numero'),
,propertiesSave)

export default router;