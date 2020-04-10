const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMusicInput(data) {
    // start with an empty errors object
    let errors = {};

    // first check property
    data.title = validText(data.title) ? data.title : '';
    data.artist = validText(data.artist) ? data.artist : '';
    data.genre = validText(data.genre) ? data.genre : '';

    // then do validator checks
    // title
    if (!Validator.isLength(data.title, { min: 1, max: 30 })) {
        errors.title = 'Title must be between 1 and 30 characters';
    };

    // artist
    if (!Validator.isLength(data.artist, { min: 1, max: 30 })) {
        errors.artist = 'Artist must be between 1 and 30 characters';
    };

    // genre
    if (!Validator.isLength(data.genre, { min: 1, max: 30 })) {
        errors.genre = 'Genre must be between 1 and 30 characters';
    };

    // also check its not empty
    // title
    if (Validator.isEmpty(data.title)) {
    // if (!Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    };

    // artist
    if (Validator.isEmpty(data.artist)) {
        errors.artist = 'Artist field is required';
    };

    // genre
    if (Validator.isEmpty(data.genre)) {
        errors.genre = 'Genre field is required';
    };

    // last return errors object
    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};