import { validationResult } from 'express-validator'

import Price from '../../models/Price.js'
import Category from '../../models/Category.js'


// panel de administracion
const myProperties = (req, res) => {
    res.render(
        'properties/admin-panel', {
            title: 'Mis propiedades',
            navigation: true,
        }
    )
}

// formulario para crear una propiedad
const propertiesCreate = async (req, res) => {
    // consultar modelo prices y categories
    const [categorias, precios] = await Promise.all([
        Category.findAll(), 
        Price.findAll(),
    ])

    res.render('properties/new-property', {
        title: 'Nueva propiedad',
        navigation: true,
        categorias,
        precios
        })
}

// guardar propiedad en la base de datos
const propertiesSave = async (req, res) => {
    // validar los datos
    const errors = validationResult(req)

    if (!errors.isEmpty()) {

        // consultar modelo prices y categories
        const [categorias, precios] = await Promise.all([
            Category.findAll(),
            Price.findAll(),
        ])

        return res.render('properties/new-property', {
            title: 'Nueva propiedad',
            navigation: true,
            categorias,
            precios,
            errors: errors.array()
        })
    }
}

export {
    myProperties,
    propertiesCreate,
    propertiesSave,
}