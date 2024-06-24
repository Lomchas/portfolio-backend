const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Routes
const routes = require('./routes/index.routes');

// Connect to Database
const dbconnect = require('./config/config');
dbconnect();

// Middlewares
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use('/portfolioDaniellosada',routes)



// start server
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/portfolioDaniellosada`);
});


