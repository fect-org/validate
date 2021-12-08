/**
 * author:Kanno
 * The module is used to verify the user's callback behavior
 */

const { isArray } = require('../verify/basic-type')
const { getProxies } = require('./get-proxies')

class CallbackAction {
  constructor() {}

  /**
   * If  user pass a callback fn ,
   * Will dispatch user callback fn
   */
  dispatch(draft, source, rules, callback) {
    const VerifiedKeys = Object.keys(draft)
    const unVerifiedKeys = Object.keys(source).filter((key) => !VerifiedKeys.includes(key))
    const unVerifiedRules = unVerifiedKeys.map((key) => rules.get(key))

    /**
     * if have unVerifiedKeys mean this rule is not pass validation .
     */

    const errors = unVerifiedRules.reduce((acc, cur, idx) => {
      /**
       * current rules can be a array . So we need to locate the wrong rules
       */
      if (isArray(cur) && draft[`__incorrect__${unVerifiedKeys[idx]}__Idx`] !== -1) {
        cur = cur[draft[`__incorrect__${unVerifiedKeys[idx]}__Idx`]]
      }
      const errLog = cur.message ? cur.message : `${unVerifiedKeys[idx]} is not verified`
      const emitInfo = {
        field: unVerifiedKeys[idx],
        fieldValue: source[unVerifiedKeys[idx]],
        type: cur.type || 'string',
        errLog,
      }
      acc = acc.concat(emitInfo)
      return acc
    }, [])

    callback && callback(errors, getProxies(draft))
  }
}

module.exports = { CallbackAction }
