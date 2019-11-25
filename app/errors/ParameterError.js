class ParameterError extends Error {
  constructor(code, msg) {
    super(msg)
    this.code = code
    this.msg = `参数错误：${msg}`
  }
}

module.exports = ParameterError