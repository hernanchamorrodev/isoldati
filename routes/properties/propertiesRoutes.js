import express from 'express';
import { myProperties, propertiesCreate } from '../../controllers/properties/propertyController.js';
const router = express.Router();

// Propiedades
// router.get('/properties', properties)

// Mis propiedades
router.get('/my-properties', myProperties)
router.get('/properties/new', propertiesCreate)

export default router;