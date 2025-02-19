const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./User');
const Mission = require('./Mission');

const UserMission = db.define('UserMission', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },

    mission_id: {
        type: DataType.INTEGER,
        references: {
            model: Mission,
            key: 'id',
        },
        allowNull: false,

    },
    timestamps: true,



});

User.belongsToMany(Mission, { through: UserMission });
Mission.belongsToMany(Users, { through: UserMission });

module.exports = UserMission;