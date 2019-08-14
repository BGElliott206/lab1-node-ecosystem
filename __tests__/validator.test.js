'use strict';

const validator = require('../lib/validator');

describe('#validator', () => {
    describe('#isLessThanTen', () => {
        test ('regular cases', () => {
            expect(validator.isLessThanTen(input,5)).toEqual(true);
            expect(validator.isLessThanTen(input,11)).toEqual(false);
            expect(validator.isLessThanTen(input,10)).toEqual(false);
            expect(validator.isLessThanTen(input,-1)).toEqual(true);
        });
    });
});

// function

// object 
