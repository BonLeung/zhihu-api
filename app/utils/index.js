const Parameter = require('../errors/ParameterError')

class Utils {
  static verifyParams(ctx, rules) {
    try {
      ctx.verifyParams(rules)
    } catch(err) {
      ctx.response.status = err.status
      const err_msg = `${err.errors[0].field} ${err.errors[0].message}`
      throw new Parameter('-1', err_msg)
    }
  }
}

module.exports = Utils