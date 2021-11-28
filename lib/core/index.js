const { createProxy } = require("./create-proxy");

class Proy {
  constructor() {
    this.rules = new Map();
    this.proxies = new Map();
  }

  createProy(rule) {
    return new Proy(rule);
  }

  validte(source, options, callback) {
    /**
     * block mean when the  validation rule generates an error,
     * no more valdation rules can processed
     */
    const { block = false } = options;
    const basic = Object.create(null);
    /**
     * draft is a proxy object when source change
     * it also can be trigger
     */
    const draft = createProxy(basic, this.rules);
    Object.assign(draft, source);
    console.log(draft);
    return new Proy(source);
  }
  descriptor(rules) {
    if (!rules) throw new Error(`Can't configure a empty rules`);
    if (Array.isArray(rules) || typeof rules !== "object")
      throw new Error("rules must be a object");
    Object.entries(rules).map(([key, rule]) => this.rules.set(key, rule));
    return this;
  }

  procude() {
    return Object.fromEntries(this.proxies);
  }
}

const proy = () => new Proy();

module.exports = {
  proy,
};
