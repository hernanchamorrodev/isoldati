import { validationResult } from 'express-validator'

import { Category, Price, Property } from '../../models/index.js'


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
        csrfToken: req.csrfToken(),
        categorias,
        precios,
        data: {}
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
            csrfToken: req.csrfToken(),
            errors: errors.array(),
            data: req.body
        })
    }

    // almacenar en la base de datos
    const { category, price, title, description, address, city, province, country, rooms, bathrooms, parking, area, image } = req.body

    try {
        const newProperty = await Property.create({
            categoryId: category,
            priceId : price,
            userId: req.user.id,
            title,
            description,
            address,
            city,
            province,
            country,
            rooms,
            bathrooms,
            parking,
            area,
            image: '',
        })

        const { id } = newProperty

        res.redirect(`/properties/new-image/${id}`)

    } catch (error) {
        console.log(error)
        req.flash('error', 'Hubo un error')
        res.redirect('/my-properties')
    }
}

const addImagesProperty = async (req, res) => {
    res.render('properties/new-image', {
        title: 'Nueva imagen',
        navigation: true,
        csrfToken: req.csrfToken(),
        //propertyId: req.params.id,
    })
}

export {
    myProperties,
    propertiesCreate,
    propertiesSave,
    addImagesProperty,
}