const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateMusicInput = require('../../validation/musics');
const Music = require('../../models/Music');
const Chat = require('../../models/Chat');
const User = require('../../models/User');

router.get('/test', (req, res) => {
    res.json({ msg: 'This is the music route' })
});

// INDEX route GET route to get all the music currently available
router.get('/', (req, res) => {
    // did not add passport.authenticate b/c doesn't matter which user is logged in
    // use mongoose to get the index
    Music
        .find()
        .sort({ date: -1 }) // sort by date in reverse order
        .then(musics => res.json(musics))
        .catch(err => res.status(400).json(err));
});

// GET look up all the musics by a give user
router.get('/user/:user_id', (req, res) => {
    // find the musics by the given id
    Music
        // search on the user field
        .find({ user: req.params.user_id })
        // then send back the music that we find
        .then(musics => res.json(musics))
        .catch(err => res.status(400).json(err));
});

// GET to a specific id 
router.get('/:id', (req, res) => {
    Music
        .findById(req.params.id)
        .then(music => res.json(music))
        .catch(err => res.status(400).json(err));
});

// Add POST route, allows us to create a new music on the backend
// and also want to add the user on the request using passport, import passport
router.post('/', 
    passport.authenticate('jwt', { session: false }), // add passport here for the second middleware function
    (req, res) => {
        // now the req object will have the user key
        // will be the current user based on the jwt
        
        // FIRST validate that the music will work
        const { isValid, errors } = validateMusicInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        // NEXT create next music, if passed validations
        const newMusic = new Music({
            user: req.user.id,
            title: req.body.title,
            artist: req.body.artist,
            genre: req.body.genre,
            location: req.body.location,
        });

        // THEN save the music and send the res
        newMusic.save() // returns a promise
            .then(music => res.json(music));
    }
);

////////////////////////// CHAT //////////////////////////

// // add a POST route 
// // create a chat
// router.post('/:musicId/chat', passport.authenticate('jwt', { session: false }), (req, res) => {
//     const { errors, isValid } = validateChatInput(req.body);

//     if (!isValid) {
//         return res.status(400).json(errors);
//     };

//     const newChat = new Chat({
//         user: {
//             _id: req.user._id,
//             name: req.user.name,
//         },
//         music: req.params.musicId,
//         message: req.body.message,
//     });

//     newChat.save()
//         .then(chat => res.json(chat))
//         .catch(err => res.status(400).json(err))
// });

// // GET chats
// router.get('/:musicId/chat', passport.authenticate('jwt', { session: false }), (req, res) => {
//     Chat
//         .find({ music: req.params.musicId })
//         .then(chats => res.json(chats))
// });

////////////////////////// CHAT //////////////////////////


// // GETS users for the chat
// router.get('/:musicId/chat/users', passport.authenticate('jwt', { session: false }), (req, res) => {
//     let music = [];

//     Music.findById(req.params.musicId)
//         .then(music => {
//             // User.findById()
//         })
// });

module.exports = router;
