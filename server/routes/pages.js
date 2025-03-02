const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
app.use(express.static(path.join(__dirname, '../../public')));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public'));
})

module.exports = router;
