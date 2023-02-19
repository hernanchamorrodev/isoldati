import {DataTypes} from 'sequelize';
import db from '../config/db.js';

const Property = db.define('properties', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false // no se permite que sea nulo
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    parking: {
        type: DataTypes.INTEGER,
        
    },
    bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    lat: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false
    },
    lng: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    sold: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
});

export default Property;