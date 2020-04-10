// validating inputs for when a user inputs

const validText = str => {
    // check if it is a string, and it isn't empty
    // trim takes all of the spaces at the end of the string
    return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText;