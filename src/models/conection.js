const mysql = require('mysql');
require('dotenv').config({path: './.env'}); // requerimos el módulo dotenv

const conection = mysql.createConnection({
    host: process.env.HOST, // usamos las variables de entorno
    user: process.env.USER,
    password: process.env.DBPASS,
    database: process.env.DB
    /*
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rickandmorty'
    */
});

conection.connect();
module.exports = conection;