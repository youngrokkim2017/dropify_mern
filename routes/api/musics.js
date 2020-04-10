const express = require('express');
const router = express.Router();
const passport = require('passport');
const validateMusicInput = require('../../validation/musics');
const Music = require('../../models/Music');

router.get('/test', (req, res) => {
    res.json({ msg: 'This is the music route' })
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
        });

        // THEN save the music and send the res
        newMusic.save() // returns a promise
            .then(music => res.json(music));
    }
);

module.exports = router;
