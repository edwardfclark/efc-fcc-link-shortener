//Set up express app and port.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const routes = require('./routes/api.js');

//Set EJS as the view engine.
app.set("view engine", "ejs");


// Connect to MongoDB.
mongoose.connect('mongodb://localhost/efc-fcc-link-shortener');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Initialize routes.
app.use("/api", routes);

// Error handling middleware.
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(422).send({error: err.message});
});

app.get("/", function(req, res) {
    res.render("index", {host: req.hostname, port: port});
});


//Listen for requests using app.listen on previously defined port.
app.listen(port, () => console.log(`The server is listening on port ${port}, brother. We're ready to accept requests.`));