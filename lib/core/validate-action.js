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
 * Array<Rules> or Rules
 */

const validateAction = (prop, value, rules) => {
  let rule = rules.get(prop)
  // if don't set rule should pass it
  if (!rule) return true

  rule = verify.isArray(rule) ? rule : [rule]
  return rule.map((item) => {
    if (!item) return true
    if (verify.isObject(item)) {
      const verifyFn = resolveVerify(item.type)
      const rightType = verifyFn(value)
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
