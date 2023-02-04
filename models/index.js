import Property from './Property';
import User from './User';
import Category from './Category';
import Price from './Price';

// asociaciones

// Cada propiedad tiene un precio
Price.hasOne(Property);

export default {
    Property,
    User,
    Category,
    Price
}