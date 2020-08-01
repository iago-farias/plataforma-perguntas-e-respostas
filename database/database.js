const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const connection = new Sequelize('guia-perguntas', 
process.env.USER, 
process.env.PASSWORD,{
    host:'localhost',
    dialect:'postgres'
});

module.exports = connection;