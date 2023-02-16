import Property from './Property.js';
import User from './User.js';
import Category from './Category.js';
import Price from './Price.js';

// asociaciones

// Cada propiedad tiene un precio
// Price.hasOne(Property);
Property.belongsTo(Price, {
    foreignKey: 'priceId'
});

// Cada propiedad tiene una categoria
Property.belongsTo(Category, {
    foreignKey: 'categoryId'
});

// Cada propiedad tiene un usuario
Property.belongsTo(User, {
    foreignKey: 'userId'
});

// Cada usuario tiene muchas propiedades
User.hasMany(Property, {
    foreignKey: 'userId'
})

// Cada categoria tiene muchas propiedades
Category.hasMany(Property, {
    foreignKey: 'categoryId'
})

export {
    Property,
    User,
    Category,
    Price
}