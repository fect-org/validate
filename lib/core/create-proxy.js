const { validateAction } = require("./validate-action");
const { isArray } = require("../verify/basic-type");

const createGetter = () => {
  return function (target, prop, receiver) {
    return Reflect.get(target, prop, receiver);
  };
};

const createSetter = (rules, callback) => {
  return function (target, prop, value, receiver) {
    const res = validateAction(prop, value, rules, callback);
    if (isArray(res)) {
      return res.map((item) => {
        if (item) return Reflect.set(target, prop, value, receiver);
        return Reflect.deleteProperty(target, prop);
      });
    }
    if (res) {
      callback && callback(null, prop);
      return Reflect.set(target, prop, value, receiver);
    }
    return Reflect.deleteProperty(target, prop);
  };
};

const createProxy = (source, rules, callback) =>
  new Proxy(source, {
    get: createGetter(),
    set: createSetter(rules, callback),
  });

module.exports = {
  createProxy,
};
