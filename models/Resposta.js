const connection = require('../database/database');
const { DataTypes } = require('sequelize');
const Pergunta = require('./Pergunta');

const Resposta = connection.define('resposta',{
    corpo:{
        type:DataTypes.TEXT,
        allowNull: false,
    },
    perguntaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Pergunta,
            key: 'id'
        }
    }
});

Resposta.sync({force:false});

module.exports = Resposta;