var Joi = require('joi');

module.exports = {
    create:{
        body: {
            date: Joi.string().required(),
            time: Joi.string().required(),
            party: Joi.number().positive().required(),
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().regex(/^[\+]?[1]{1}[(]?[0-9]{3}[)]?[0-9]{3}[-]?[0-9]{4}$/).required(),
            message: Joi.string().optional()
        }
    }
};