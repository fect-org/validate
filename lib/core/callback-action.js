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
    const VerfiedKeys = Object.keys(draft)
    const unVerfiedKeys = Object.keys(source).filter((key) => !VerfiedKeys.includes(key))
    const unVerfiedRules = unVerfiedKeys.map((key) => rules.get(key))

    /**
     * if have unVerfieKeys mean this rule is not pass validation .
     */

    const errors = unVerfiedRules.reduce((acc, cur, idx) => {
      /**
       * current rules can be a arrary . So we need to locate the wrong rules
       */
      if (isArray(cur) && draft[`__incorrect__${unVerfiedKeys[idx]}__Idx`] !== -1) {
        cur = cur[draft[`__incorrect__${unVerfiedKeys[idx]}__Idx`]]
      }
      const errLog = cur.message ? cur.message : `${unVerfiedKeys[idx]} is not verified`
      const emitInfo = {
        field: unVerfiedKeys[idx],
        fieldValue: source[unVerfiedKeys[idx]],
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
