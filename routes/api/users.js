const express = require('express');
const router = express.Router(); // gets a router object
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

// ADD ROUTES
router.get('/test', (req, res) => {
    res.json({ msg: 'This is the user route' });
});

// route to register user (CREATE A NEW USER)
router.post('/register', (req, res) => {
    // look up if the user already exits based on the email, grabbing it from request body
    User.findOne({ email: req.body.email })
        .then(user => {
            // if the user already exists in the database, send an error code
            if (user) {
                return res.status(400).json({ email: "A user is already registered with that email" })
            } else { // if user doesn't exist, create a new user
                const newUser = new User({
                    handle: req.body.handle,
                    email: req.body.email,
                    password: req.body.password, 
                });

                // use bcrypt to generate salt
                // first arg is the number of rounds done to generate salt
                // second arg is invoked when it is done and ready to continue
                bcrypt.genSalt(10, (err, salt) => {
                    // use this salt to hash the password
                    // 1st arg the thing you want to hash, newly created users passowrd
                    // 2nd arg is the salt you just got back
                    // 3rd arg to be invoked after the password has been successfully hashed (first arg is err, second is newly created password hash)
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        // if there's an err throw the err
                        if (err) throw err;
                        // reset the password for the new user
                        newUser.password = hash;

                        // AFTERWARDS can save user
                        newUser.save() // this returns a promise
                            // want to sent this back to the front end
                            // user will be a json object
                            .then((user) => res.json(user)) 
                            // else catch error
                            .catch(err => console.log(err))
                    });
                });

                // // save newUser (FOR TESTING ONLY)
                // newUser.save()
                //     .then(user => res.send(user))
                //     .catch(err => res.send(err));
            }
        });
})

module.exports = router;