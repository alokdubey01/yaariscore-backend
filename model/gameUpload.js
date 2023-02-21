const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name:{
        type: String
    },
    url:{
        type: String
    },
    image: {
        type: String
    }
})

module.exports = new mongoose.model('Game', gameSchema)