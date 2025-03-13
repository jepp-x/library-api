import Joi from "joi";


export const addLibraryValidator = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    pages: Joi.string().required(),
    publishedDate: Joi.date().required(),
    genre: Joi.string().required(),
    language: Joi.string().required(),
    publisher: Joi.string().required(),
    summary: Joi.string().required(),
    image: Joi.string().required(),

})