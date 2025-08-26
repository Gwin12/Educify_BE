import Joi from "joi";

const sendLinkSchema = Joi.object({
    email: Joi.string().email().required().trim()
});

export default { sendLinkSchema }