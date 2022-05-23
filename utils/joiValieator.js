const Joi = require('joi')

const sendContactFormValidator = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	message: Joi.string(),
	needs: Joi.string(),
	budg: Joi.string()
})

module.exports = {
  sendContactFormValidator
}