'use strict';

const validator = module.exports = {};

validator.isLessThanTen = (input) => {
    return input < 10;
};

// validator.isFunction = () => {};

validator.isFemale = (input) => {
    return input === true;
};