import {DataTypes} from 'sequelize';
import db from '../config/db.js';

// defino nuevo modelo
const Price = db.define('prices', {
    value: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El precio es obligatorio'
            },
            notEmpty: {
                msg: 'El precio no puede estar vacío'
            },
            haveSymbol:
                function (value) {
                    if (value[0] !== '$') {
                        throw new Error('El precio debe comenzar con el símbolo $');
                    }
                }
        }
    },
});

export default Price;