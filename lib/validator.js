'use strict';

let validator = module.exports = {};

validator.isGreaterThanFour = () => {
    return input > 4;
};






// module.exports.getBiggest = function (a, b, c) {
//     let biggestSoFar = null;
//     if (a > b) {
//         biggestSoFar = a;
//     } else {
//         biggestSoFar = b;
//     }

//     if(biggestSoFar > c) {
//         return biggestSoFar;
//     }else {
//         return c;
//     }
// };

// validator.isFemale = (input) => {
//     return input === true;
// };