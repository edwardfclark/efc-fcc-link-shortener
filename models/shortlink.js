const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create shortlink Schema & Model.
// This needs to have the original url and the shortened value associated with it.

const shortlinkSchema = new Schema({
    url: {
        type: String,
        required: [true, "URL field is required"]
    },
    shortened: Number
});

// Links is the model, "shortlink" is the collection name, and shortlinkSchema is the schema the model is based on.
const Link = mongoose.model("shortlink", shortlinkSchema);

// Links has to be exported in order to use this in other files.
module.exports = Link;