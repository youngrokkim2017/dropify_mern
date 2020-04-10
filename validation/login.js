// LOGIN VALIDATOR FUNCTION

const Validator = require('validator');
const validText = require('./valid-text');

// write function that thats data object, contains email and password
// makes sure that all of the fields are valid
module.exports = function(data) {
    let errors = {};

    // check if the keys for email and password exist on this data object
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    // now check if the email is in the form of the email
    if (!Validator.isEmail(data.email)) {
        // if not an email, populate errors object
        errors.email = 'Email is invalid';
    };

    // check if the email field is empty
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    };

    // now check if the password is empty
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    };

    // now return an object to find out what the outcome of this function is
    return {
        errors,
        // isValid is whether or not there is anything in the errors object
        isValid: Object.keys(errors).length === 0,
    };
}