const joi = require("joi");
const enums = require("../../../constants/enumConstants")

module.exports = {
  userSave: joi.object({
    body: joi.object({
        firstname: joi.string(),
        lastname: joi.string()
    }).required()
  }).unknown(),

  userDelete: joi.object({
    params: joi.object({
      id: joi.string().allow("").error(() => new Error("booking id is required")),
    }).required(),
  }).unknown(),

  userUpdate: joi.object({
    params: joi.object({
      id: joi.string().allow("").error(() => new Error("booking id is required")),
    }).required(),
  }).unknown(),
}
