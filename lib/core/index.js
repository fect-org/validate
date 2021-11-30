const { createProxy } = require('./create-proxy')
const { isObject } = require('../verify/basic-type')
const { CallbackAction } = require('./callback-action')
const { getProxies } = require('./get-proxies')

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
    // eslint-disable-next-line quotes
    if (!source) throw Error("Can't configure a empty")
    if (!isObject(source)) throw new Error('source msut be a object')
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
    if (!isObject(rules)) {
      throw new Error('rules must be a object')
    }
    Object.entries(rules).map(([key, rule]) => this.rules.set(key, rule))
    return this
  }
  produce() {
    const proxies = getProxies(Object.fromEntries(this.proxies))
    return proxies
  }
}

const proy = () => new Proy()

module.exports = {
  proy,
}
