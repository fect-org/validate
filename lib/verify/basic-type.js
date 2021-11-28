/**
 * this file is javaScript basic type collections
 * Author: Kanno
 */

const isArray = (val) => Array.isArray(val)

const isNumber = (val) => typeof val === 'number' && !isNaN(val)

const isObject = (val) => typeof val === 'object' && Object.prototype.toString.call(val) === '[object Object]'

const isString = (val) => typeof val === 'string'

const isBoolean = (val) => typeof val === 'boolean'

module.exports = { isArray, isNumber, isObject, isString, isBoolean }
