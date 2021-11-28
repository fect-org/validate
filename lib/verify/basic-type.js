/**
 * this file is javaScript basic type collections
 * Author: Kanno
 */

const arrary = (val) => Array.isArray(val);

const number = (val) => !isNaN(Number(val));

const object = (val) =>
  typeof val === "object" &&
  Object.prototype.toString.call(val) === "[Object Object]";

const string = (val) => typeof val == "string";

const boolean = (val) => typeof val == "boolean";

module.exports = { arrary, number, string, object, boolean };
