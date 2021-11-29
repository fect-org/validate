const { validateAction } = require('./validate-action')
const { isArray } = require('../verify/basic-type')

const createSetter = (rules) => {
  return function (target, prop, value, receiver) {
    const res = validateAction(prop, value, rules)
    if (isArray(res)) {
      const incorrectIdx = res.indexOf(false)
      if (incorrectIdx !== -1) Reflect.set(target, `__incorrect__${prop}__Idx`, incorrectIdx, receiver)
      const unPassed = res.includes(false)
      if (unPassed) return Reflect.deleteProperty(target, prop)
      return Reflect.set(target, prop, value, receiver)
    }
    if (res) {
      return Reflect.set(target, prop, value, receiver)
    }
    return Reflect.deleteProperty(target, prop)
  }
}

const createProxy = (source, rules) =>
  new Proxy(source, {
    set: createSetter(rules),
  })

module.exports = {
  createProxy,
}
