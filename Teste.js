const yup = require('yup')

let schema = yup.mixed().oneOf(['jimmy', 42]);

console.log(schema.isValid(42)) // => true
console.log(schema.isValid('jimmy')); // => true
console.log(schema.isValid(new Date())); // => false