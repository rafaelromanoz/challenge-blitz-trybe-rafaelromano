const Joi = require('joi');

const taskSchema = Joi.object({
  task: Joi.string().required().messages({
    'any.required': 'É necessário informar uma tarefa',
    'string.base': 'Task precisa ser uma string',
  }),
  date: Joi.string().required().messages({
    'any.required': 'É necessário informar uma data',
    'string.base': 'Date precisa ser uma string',
  }),
  status: Joi.string().required().messages({
    'any.required': 'É necessário informar um status',
    'string.base': 'Status precisa ser uma string',
  }),
});

module.exports = {
  taskSchema,
};
