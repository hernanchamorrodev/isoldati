import { exit } from 'node:process'

import categories from './categories.js';
import prices from './prices.js';
import users from './users.js';
import { Category, Price, User } from '../models/index.js';

import db from '../config/db.js';

const importar = async() => {
    try {
        await db.authenticate();
        await db.sync();
        
        await Promise.all(
            [
                Category.bulkCreate(categories),
                Price.bulkCreate(prices),
                User.bulkCreate(users)
            ]
        )

        console.log('Data imported...');
        exit();
    } catch(error){
        console.error(error);
        exit(1)
    }
}

const eliminar = async() => {
    try {
        await db.authenticate();
        await db.sync({
            force: true
        });

        console.log('Data destroyed...');
        exit();

    } catch(error){
        console.error(error);
        exit(1)
    }
}

if(process.argv[2] === '-i'){
    importar();
}

if(process.argv[2] === '-d'){
    eliminar();
}
