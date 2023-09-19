import Joi from 'joi';

const create_user_validation = Joi.object({
    username: Joi.string().max(100).required().error(new Error('invalid username')),
    emailAddress: Joi.string().max(100).required().error(new Error('invalid emailAddress')),
    accountNumber: Joi.string().max(100).required().error(new Error('invalid accountNumber')),
    identityNumber: Joi.string().max(100).required().error(new Error('invalid identityNumber'))
});

const id_user_validation = Joi.string().hex().required().length(24).error(new Error('invalid user id'));

const get_user_validation = Joi.object({
    identityNumber: Joi.string().max(100).error(new Error('invalid identityNumber')),
    accountNumber: Joi.string().max(100).error(new Error('invalid accountNumber'))
}).or('identityNumber', 'accountNumber');

const update_user_validation = Joi.object({
    username: Joi.string().max(100).error(new Error('invalid username')),
    emailAddress: Joi.string().max(100).error(new Error('invalid emailAddress')),
    accountNumber: Joi.string().max(100).error(new Error('invalid accountNumber')),
    identityNumber: Joi.string().max(100).error(new Error('invalid identityNumber'))
}).or('username', 'emailAddress', 'identityNumber', 'accountNumber').error(new Error('invalid update field'));

export {
    create_user_validation,
    id_user_validation,
    get_user_validation,
    update_user_validation
};