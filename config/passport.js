// this will tell password that you want to use strategy for jwt 
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
// import User model
const User = mongoose.model('users');
const keys = require('./keys');

// configure passport options
// create empty options hash
const options = {};
// start defining options
// first where we are planning to get json web token from
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// tell passport that we want secretOrKey
options.secretOrKey = keys.secretOrKey;

// anonymous function
module.exports = passport => {
    // tell passport to use a strategy
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        console.log(jwt_payload);
        done(); 
    }));
}