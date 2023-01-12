import * as joi from 'joi'

export const JoinValidationSchema = joi.object({
    MONGODB: joi.required(),
    PORT: joi.number().default(3000),
    DEFAULT_LIMIT: joi.number().default(7)
})