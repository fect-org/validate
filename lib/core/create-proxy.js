const { validateAction } = require("./validate-action");

const createGetter = () => {
  return function (target, prop, receiver) {
    return Reflect.get(target, prop, receiver);
  };
};

const createSetter = (rules) => {
  return function (target, prop, value, receiver) {
    const res = validateAction(prop, value, rules);
    if (res) {
      return Reflect.set(target, prop, value, receiver);
    }
    return Reflect.deleteProperty(target, prop);
  };
};

const createProxy = (source, rules) =>
  new Proxy(source, {
    get: createGetter(),
    set: createSetter(rules),
  });

module.exports = {
  createProxy,
};
