import express from 'express';

import { body } from 'express-validator';

import { myProperties, propertiesCreate, propertiesSave, addImagesProperty } from '../../controllers/properties/propertyController.js';

import protectRoute from '../../middleware/protectRoute.js';


const router = express.Router();

// Propiedades

// Mis propiedades
router.get('/my-properties', protectRoute, myProperties)

// Crear propiedades
router.get('/properties/new', protectRoute, propertiesCreate)
router.post('/properties/new', protectRoute,
    body('titulo').notEmpty().withMessage('Debes ingresar un título para tu anuncio'),
    body('descripcion').notEmpty().withMessage('Debes ingresar una descripción para tu anuncio')
    .isLength({ min: 20, max:500 }).withMessage('La descripción debe tener al menos 20 carácteres y no más de 500'),
    body('precio').isNumeric().withMessage('Debes ingresar un rango de precios para tu anuncio'),
    body('categoria').isNumeric().withMessage('Debes seleccionar una categoría para tu anuncio'),
    body('habitaciones').isNumeric().withMessage('Debes ingresar la cantidad de habitaciones de tu propiedad'),
    body('toilet').isNumeric().withMessage('Debes ingresar la cantidad de baños de tu propiedad'),
    body('estacionamiento').isNumeric().withMessage('Debes ingresar la cantidad de estacionamientos de tu propiedad'),
    // body('lat').notEmpty().withMessage('Debes ubicar tu propiedad en el mapa'),
    propertiesSave)

router.get('/properties/new-image/:id', addImagesProperty)

export default router;