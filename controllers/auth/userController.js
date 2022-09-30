import {check, validationResult} from 'express-validator'
// import models
import User from '../../models/User.js';

// Form Login
const loginForm = (req, res) => {
    res.render('./auth/login', {
        state: true,
        title: 'Iniciar sesión',
    });
};

// Form Registro
const signupForm = (req, res) => {
    res.render('./auth/signup', {
        state: true,
        title: 'Crear cuenta'
    });
};

// Registrar usuario
const register = async (req, res) => {

    console.log(req.body)
    //validation
    await check('name').notEmpty().withMessage('El campo nombre no puede estar vacío').run(req)
    await check('email').isEmail().notEmpty().withMessage('Coloque un email del tipo email@ejemplo.com').run(req)
    await check('password').isLength({ min: 8 }).withMessage('La contraseña debe contener 8 carácteres como mínimo').custom((value, { req }) => {
        if (value !== req.body.password_confirmation) {
            throw new Error('Las contraseñas no coinciden')
        } else {
            return value
        }
    }).run(req)

    
    let result = validationResult(req)

    // verify empty result
    if (!result.isEmpty()) {
        return res.render('./auth/signup', {
            title: 'Crear cuenta',
            errors: result.array(),
            user: {
                name: req.body.name,
                email: req.body.email,
            }
        })
    }
    
    // verify if user exists
    const userExists = await User.findOne({ email: req.body.email })
    if (userExists) {
        return res.render('./auth/signup', {
            title: 'Crear cuenta',
            errors: [{ msg: 'El usuario ya existe' }],
            user: {
                name: req.body.name,
                email: req.body.email,
            }
        })
    }



    const user = await User.create(req.body)

    res.json(user)
}

// Form Recuperar contraseña
const recoverPasswordForm = (req, res) => {
    res.render('./auth/recoverPassword', {
        title: 'Recuperar acceso',
    })
}

export {
    loginForm,
    signupForm,
    recoverPasswordForm,
    register,
};