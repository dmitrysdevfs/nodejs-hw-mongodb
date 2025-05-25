import Joi from 'joi';

const nameValidation = Joi.string().trim().min(3).max(20);
const phoneNumberValidation = Joi.string()
  .pattern(/^\+\d{10,15}$/)
  .messages({
    'string.pattern.base':
      'Phone number must be in international format, e.g., +380XXXXXXXXX',
  });
const emailValidation = Joi.string()
  .trim()
  .email()
  .lowercase()
  .options({ convert: false });
const contactTypeValidation = Joi.string().valid('work', 'home', 'personal');

export const createContactSchema = Joi.object({
  name: nameValidation.required(),
  phoneNumber: phoneNumberValidation.required(),
  email: emailValidation.optional(),
  isFavourite: Joi.boolean().optional(),
  contactType: contactTypeValidation.required(),
});

export const updateContactSchema = Joi.object({
  name: nameValidation.optional(),
  phoneNumber: phoneNumberValidation.optional(),
  email: emailValidation.optional(),
  isFavourite: Joi.boolean().optional(),
  contactType: contactTypeValidation.optional(),
});
