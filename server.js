//Set up express app and port.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const routes = require('./routes/api.js');

const mongoose = require('mongoose');

// Connect to MongoDB.
mongoose.connect('mongodb://localhost/efc-fcc-link-shortener');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// Initialize routes.
app.use("/api", routes);

//Listen for requests using app.listen on previously defined port.
app.listen(port, () => console.log(`The server is listening on port ${port}, brother. We're ready to accept requests.`));