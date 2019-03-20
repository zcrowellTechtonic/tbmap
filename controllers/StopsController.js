
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const router = express.Router();




app.get('/', (req, res) => res.send('Hello World!'))

module.exports = router;