// Requiring express module and the express Router(), which we can mount our routes onto.

const express = require('express');
const router = express.Router();

// Link is the Model used in our database. It is defined and exported in shortlink.js.
const Link = require('../models/shortlink.js');

// An example get request. It looks up the entry with :id, redirects you to that URL.
router.get('/shorturl/:id', function(req, res) {
    res.send({type: "GET", example: "true"})
});

// Add a new link to the database with a POST request.
router.post("shorturl/new", function(req, res) {
    var link = new Link();
    res.send();
});

// Those are the only two types of request I need to handle for this project.

module.exports = router;