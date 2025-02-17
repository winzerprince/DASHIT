require('dotenv').config();
const { Sequelize } = require('sequelize');

// Sequelize instance with mysql connection details
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false
    }
);

// Connection test
sequelize.authenticate()
    .then(() => console.log('Connected to MySQL successfully!'))
    .catch(err => console.error('Unable to connect to MySQL: ', err));

module.exports = sequelize;
