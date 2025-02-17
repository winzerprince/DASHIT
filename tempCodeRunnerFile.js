const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dashit_users', 'root', 'mysql',
    { host: 'localhost', dialect: 'mysql' });

async function testSequelize() {
    try {
        await sequelize.authenticate();
        console.log('Connected to mysql with Sequelize!');

    }
    catch (error) {
        console.error('Sequelize connection error:',error)
    }
}

testSequelize();
module.exports = sequelize;
