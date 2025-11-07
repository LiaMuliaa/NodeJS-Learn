const validator = require('validator');

console.log(validator.isEmail('liaS@gmail.com'));
console.log(validator.isMobilePhone('0783456969', 'id-ID'));
console.log(validator.isNumeric('089349493'));