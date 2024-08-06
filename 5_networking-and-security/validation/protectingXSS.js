const Handlebars = require('handlebars');
const template = Handlebars.compile('<p>{{userInput}}</p>');
const result = template({ userInput: '<script>alert("xss");</script>' });

console.log('Escaped output: ', result);