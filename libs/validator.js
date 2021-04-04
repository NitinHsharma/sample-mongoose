const joi = require('joi');
const { errFormat } = require('../libs/outputFormater');

module.exports.validate = (type, schema) => {
  return async (req, res, next) => {
    try {
      const validationConfig = require(`./requestSchema/${type}`);
      await validationConfig[schema].validateAsync(req);
      return next();
    } catch (e) {
      return errFormat(
        'US-VL-CHECK-01', e.message
      );
    }
  };
};
