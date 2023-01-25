require('dotenv').config();
const mysql = require('mysql');

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

const connectToDb = async () => {
    return mysql.createConnection({
        host: MYSQL_HOST,
        port: MYSQL_PORT,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE
    });
}

module.exports = connectToDb;