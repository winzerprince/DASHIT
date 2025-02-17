require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes')
const path = require('path');
const   sequelize = require('./config/db');
//const models = require('./models')
const app = express();
const port = process.env.PORT || 3000;
const homepage = require('./routes/pages');
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', homepage);
app.use(express.json());
app.use('/users', userRoutes);



sequelize.sync({ force: false })
    .then(() => console.log('Database and tables synced '))
    .catch(err=> console.error('Error syncing database:' ,err))






app.listen(port, async () => {
        console.log('Connected to port ', port)
      
})