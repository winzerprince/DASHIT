const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Mission = db.define('Mission', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,


    },
    launch_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Upcoming &#128511'


    },

}, { timestamps: true, });

module.exports = Mission;