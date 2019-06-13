const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a simple route
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');


// Connecting to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true } ).then(() => {
    console.log("Successfully connected to the database");

    /**
     * Routing for all project
     */

    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });

const router = require('./routes/index')
app.use('/api/v1/', router.api)

}).catch(err => {
console.log('Could not connect to the database. Exiting now...', err);
process.exit();
});





