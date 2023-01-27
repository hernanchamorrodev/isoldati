
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
const propertiesCreate = (req, res) => {
    res.render('properties/new-property', {
        title: 'Nueva propiedad',
        navigation: true,
        })
}

export {
    myProperties,
    propertiesCreate
}