const ResultVO = require('../vo/ResultVO')

class ResultVOUtil {
  static success(data) {
    return new ResultVO('0', 'success', data)
  }

  static fail(code, msg) {
    return new ResultVO(code, msg)
  }
}

module.exports = ResultVOUtil