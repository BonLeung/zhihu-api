class CommonError extends Error {
  constructor(status, code, msg) {
    super(msg)
    this.status = status
    this.code = code
    this.msg = msg
  }
}

module.exports = CommonError