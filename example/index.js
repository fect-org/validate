const { proy } = require('../lib')

const descriptor = {
  name: [
    {
      type: 'string',
      required: true,
    },
    {
      type: 'string',
      validate: (val) => val === 'kanno',
    },
  ],
  age: [
    {
      type: 'number',
      required: true,
    },
    {
      type: 'number',
      required: true,
      validate: (val) => val >= 10,
    },
  ],
}
const unVerified = {
  // "XeryYue"
  name: 'xeryYue',
  age: 1,
}

const basic = proy()
const proxies = basic
  .descriptor(descriptor)
  .validate(unVerified, (err, fields) => {
    console.log(err)
    console.log(fields)
  })
  .produce()

console.log(proxies)
