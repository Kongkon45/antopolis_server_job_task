const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    createdOn : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model("animals", animalSchema)