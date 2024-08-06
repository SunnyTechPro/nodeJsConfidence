const Joi = require('joi');
const schema = joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});
const { error, value } = schema.validate({
    username: 'user1',
    password: 'password1'
});

if (error) {
    console.error('Validation error: ', error.details);
} else {
    console.log('Validated data: ', value);
}