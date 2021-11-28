/**
 * author:Kanno
 */

const { isArray, isObject, isNumber, isString } = require("./basic-type");

const normalEmpty = (val) => val === undefined || val === null;

const beRequired = (val) => {
  if (normalEmpty(val)) return false;
  if (isArray(val) && val.length) return true;
  if (isObject(val) && Object.keys(val).length) return true;
  if (isNumber(val) && val !== 0) return true;
  if (isString(val) && val !== "") return true;
  return false;
};

module.exports = {
  beRequired,
};
