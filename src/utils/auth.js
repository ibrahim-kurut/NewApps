import Joi from "joi";


// login Validation schema
export const loginValidationSchema = Joi.object({
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
    password: Joi.string().trim().min(6).max(8).pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$")).required()
        .messages({ "string.pattern.base": "Parola en az bir kucuk harf, bir buyuk harf ve bir sayi icermelidir" }),
});

// register Validation schema
export const registerValidationSchema = Joi.object({
    firstName: Joi.string().trim().min(3).max(15).lowercase().required(),
    surName: Joi.string().trim().min(3).max(15).lowercase().required(),
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required(),
    password: Joi.string().trim().min(6).max(8).pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$")).required()
        .messages({ "string.pattern.base": "Parola en az bir kucuk harf, bir buyuk harf ve bir sayi icermelidir" }),
});
