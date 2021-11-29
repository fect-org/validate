/**
 * author:Kanno
 * The module is used to verify the user's callback behavior
 */

class CallbackAction {
  constructor() {}

  /**
   * If  user pass a callback fn ,
   * Will dispatch user callback fn
   */
  disptach(draft, source, rules, callback) {
    const VerfiedKeys = Object.keys(draft)
    const unVerfiedKeys = Object.keys(source).filter((key) => !VerfiedKeys.includes(key))

    const unVerfiedRules = unVerfiedKeys.map((key) => rules.get(key))
    /**
     * if have unVerfieKeys mean this rule is not pass validation .
     */

    const errors = unVerfiedRules.reduce((acc, cur, idx) => {
      const emitInfo = {
        field: unVerfiedKeys[idx],
        fieldValue: source[unVerfiedKeys[idx]],
        type: cur.type,
        errLog: `${unVerfiedKeys[idx]} is not be ${cur.type}`,
      }
      acc = acc.concat(emitInfo)
      return acc
    }, [])
    callback && callback(errors, draft)
  }
}

module.exports = { CallbackAction }
