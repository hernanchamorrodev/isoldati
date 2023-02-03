import {DataTypes} from 'sequelize';
import db from '../config/db.js';

// defino nuevo modelo
const Price = db.define('prices', {
    value: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Price;