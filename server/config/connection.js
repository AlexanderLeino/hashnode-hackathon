const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/groupies", {

});

module.exports = mongoose.connection;