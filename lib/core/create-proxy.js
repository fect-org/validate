const { validateAction } = require('./validate-action')
const { isArray } = require('../verify/basic-type')

const createSetter = (rules, callback) => {
  return function (target, prop, value, receiver) {
    const res = validateAction(prop, value, rules)
    if (isArray(res)) {
      return res.map((item) => {
        if (item) return Reflect.set(target, prop, value, receiver)
        return Reflect.deleteProperty(target, prop)
      })
    }
    if (res) {
      return Reflect.set(target, prop, value, receiver)
    }
    return Reflect.deleteProperty(target, prop)
  }
}

const createProxy = (source, rules, callback) =>
  new Proxy(source, {
    set: createSetter(rules, callback),
  })

module.exports = {
  createProxy,
}
