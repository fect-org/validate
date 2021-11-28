/**
 * validate action .
 * Author: Kanno
 */

const verify = require("../verify/basic-type");
const { beRequired } = require("../verify/required");

const resolveVerify = (type = "string") => {
  const verifyType = "is" + type.charAt(0).toUpperCase() + type.slice(1);
  return verify[verifyType];
};

const resolveRequired = (val, required = false) => {
  if (!required) return false;
  return beRequired(val);
};

const validateAction = (prop, value, rules) => {
  const rule = rules.get(prop);
  // if don't set rule should pass it
  if (!rule) return true;
  if (verify.isObject(rule)) {
    // if (rule.required) {
    //   const empty = beRequired(value);
    //   if (empty) return;
    // }
    const verfiyFn = resolveVerify(rule.type);
    const rightType = verfiyFn(value);
    if (!rightType) return false;
    const shouldRequired = rule.required;
    // if (shouldRequired) {
    //   console.log(shouldRequired);
    // }
    return true;
  }
  // { type: 'string', required: true }
  rule.forEach((item, i) => {
    if (item.required) {
      /**
       * required only judge value has be empty .
       * if user don't set rule.required set false as default
       */
      const empty = beRequired(value);
      if (empty) return;
      const verfiyFn = resolveVerify(item.type);
      const rightType = verfiyFn(value);
      if (!rightType) return;
    }
  });
};

module.exports = {
  validateAction,
};
