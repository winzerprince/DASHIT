const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('dashit_users', 'root', 'mysql',
    { host: 'localhost', dialect: 'mysql' });

async function testSequelize() {
    try {
        await sequelize.authenticate();
        console.log('Connected to mysql with Sequelize!');

    }
    catch (error) {
        console.error('Sequelize connection error:', error)
    }
}

async function syncDatabase() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synced successfully!');
    }
    catch (err) {
        console.error('Error synchronizing database:', error);
        
    }
}

syncDatabase();

testSequelize();
module.exports = sequelize;
