const createGetter = () => {
  return function (target, prop, receiver) {
    return Reflect.get(target, prop, receiver);
  };
};

const createSetter = (validate) => {
  return function (target, prop, value, receiver) {
    const rule = validate.get(prop);
    // rule can be un defined . so we will skip to judge
    //  this field
    if (rule) {
    }

    return Reflect.set(target, prop, value, receiver);
  };
};

const createProxy = (source, validate) =>
  new Proxy(source, {
    get: createSetter(),
    set: createSetter(validate),
  });

module.exports = {
  createProxy,
};
