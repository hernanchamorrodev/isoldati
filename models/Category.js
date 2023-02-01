import {DataTypes} from 'sequelize';
import db from '../config/db.js';

// defino nuevo modelo
const Category = db.define('categories', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false // no se permite que sea nulo
    }
});

export default Category;