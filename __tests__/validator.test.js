'use strict';

const validator = require('../lib/validator');

describe('#validator', () => {
    describe('#isGreaterThanFour', () => {
        test ('all cases', () => {
            expect(validator.isGreaterThanFour(input, 5)).toEqual(true);
            expect(validator.isGreaterThanFour(input, 2)).toEqual(false);
            expect(validator.isGreaterThanFour(input, 10)).toEqual(true);
            expect(validator.isGreaterThanFour(input, -1)).toEqual(false);
        });
    });
});



// function
// const getMinMax = require('../get-biggest');

// describe('Find the biggest number' () => {

//     test('Test normal input', () => {

//         expect(getMinMax.getBiggest(1,2,3)).toEqual(3);
        
//         expect(getMinMax.getBiggest(10,2,3)).toEqual(10);
//     });

//     test('Test equal input', () => {
//         expect(getMinMax.getBiggest(2,2,2)).toEqual(2);
//     });

//     test('Test negative input', () => {
//         expect(getMinMax.getBiggest(-4, -3, -10)).toEqual(-3)
//     });
// });

// object 
