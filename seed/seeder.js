import { exit } from 'node:process'

import categories from './categories.js';
import Category from '../models/Category.js';

import db from '../config/db.js';

const importar = async() => {
    try {
        await db.authenticate();
        await db.sync();
        await Category.bulkCreate(categories);
        console.log('Data imported...');
        exit();
    } catch(error){
        console.error(error);
        exit(1)
    }
}

if(process.argv[2] === '-i'){
    importar();
}