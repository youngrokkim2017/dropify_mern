// Define a new schema, for music
// pass into mongoose.models
// have a model for our Music
const mongoose = require('mongoose');
// need to access the schema
const Schema = mongoose.Schema;

// Define what it means to be a Music in our app
const MusicSchema = new Schema({
    user: {
        // similar to active record association
        type: Schema.Types.ObjectId,
        // needs a reference, the model we want to associate it with
        ref: 'musics',
    },
    // text: {
    //     type: String,
    //     required: true,
    // },
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Pass into mongoose.models
const Music = mongoose.model('music', MusicSchema);

module.exports = Music;