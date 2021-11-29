const { createProxy } = require('./create-proxy')
const { CallbackAction } = require('./callback-action')

class Proy extends CallbackAction {
  constructor() {
    super()
    this.rules = new Map()
    this.proxies = new Map()
  }
  /**
   * validate can naturally handle subsequent errors that intercept the current field
   */
  validate(source, callback) {
    const basic = Object.create(null)
    /**
     * draft is a proxy object when source change
     * it also can be trigger
     */
    const draft = createProxy(basic, this.rules)
    Object.assign(draft, source)
    Object.entries(draft).map(([key, poxis]) => this.proxies.set(key, poxis))
    this.disptach(draft, source, this.rules, callback)
    return this
  }
  descriptor(rules) {
    // eslint-disable-next-line quotes
    if (!rules) throw new Error("Can't configure a empty rules")
    if (Array.isArray(rules) || typeof rules !== 'object') {
      throw new Error('rules must be a object')
    }
    Object.entries(rules).map(([key, rule]) => this.rules.set(key, rule))
    return this
  }
  produce() {
    return Object.fromEntries(this.proxies)
  }
}

const proy = () => new Proy()

module.exports = {
  proy,
}
