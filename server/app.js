const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const homepage = require('./routes/pages');
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', homepage);



app.listen(port, () => {
    console.log('Listenning on port ' + port);
})