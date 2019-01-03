// Requiring express module and the express Router(), which we can mount our routes onto.

const express = require('express');
const router = express.Router();

// Link is the Model used in our database. It is defined and exported in shortlink.js.
const Link = require('../models/shortlink.js');

// An example get request. It looks up the entry with :id, redirects you to that URL.
router.get('/shorturl/:id', function(req, res, next) {

    // Set val based on the number of documents in the database. This will be used to create the record later.

    let val;
    Link.estimatedDocumentCount().then(function(number) {
        console.log("number is "+number);
        val = number;
        return val;
    });
    // console.log(val);
    res.send({test: "pass?"});
});


// Add a new link to the database with a POST request.
// req.body should send the data in format {url: String, shortened: Number} as required. Maybe I'll need to access the database to get the right Number, as it will need to be inferred.
router.post("/shorturl/new", function(req, res, next) {

    Link.findOne({url: req.body.url}, function(err, oldLink) {

        // First, see if the url already exists in the database. If not, create a new record and res.send that data. If so, res.send the old data.
        if (oldLink == null) {
            // Find out what the number of docs in the database is. Use that to set the shortened property.
        
            Link.estimatedDocumentCount().then(function(number) {
                Link.create({url: req.body.url, shortened: number}).then(function(link) {
                    res.send(link);
                }).catch(next);
            }).catch(next);

        } else {
            res.send(oldLink);
        }

    }).catch(next);

    
});

module.exports = router;