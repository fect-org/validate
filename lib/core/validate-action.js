/**
 * validate action .
 * Author: Kanno
 */

const verify = require('../verify/basic-type')
const { beRequired } = require('../verify/required')

const resolveVerify = (type = 'string') => {
  const verifyType = 'is' + type.charAt(0).toUpperCase() + type.slice(1)
  return verify[verifyType]
}

/**
 * rules can be undefined or {}
 * Arrary<Rules> or Rules
 */

const validateAction = (prop, value, rules) => {
  const rule = rules.get(prop)
  // if don't set rule should pass it
  if (!rule) return true
  if (verify.isObject(rule)) {
    const verfiyFn = resolveVerify(rule.type)
    const rightType = verfiyFn(value)
    const required = rule.required || false
    const hasValidateFn = typeof rule.validate === 'function'
    const validateFn = hasValidateFn && rule.validate
    // if usr set required and type
    if (rightType && required) {
      if (hasValidateFn) return validateFn(value)
      return beRequired(value)
    }
    //  usr don't set required
    if (rightType && hasValidateFn) return validateFn(value)
    return rightType
  }

  return rule.map((item, i) => {
    if (!item) return true
    if (verify.isObject(item)) {
      const verfiyFn = resolveVerify(item.type)
      const rightType = verfiyFn(value)
      const required = item.required || false
      const hasValidateFn = typeof item.validate === 'function'
      const validateFn = hasValidateFn && item.validate
      // if usr set required and type
      if (rightType && required) {
        if (hasValidateFn) return validateFn(value)
        return beRequired(value)
      }
      //  usr don't set required
      if (rightType && hasValidateFn) return validateFn(value)
      return rightType
    }
  })
}

module.exports = {
  validateAction,
}
