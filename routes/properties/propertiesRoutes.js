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
router.post('/properties/new', propertiesSave)

export default router;