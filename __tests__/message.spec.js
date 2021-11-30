const test = require('ava')
const { proy } = require('../lib')

const descriptor = {
  age: {
    type: 'number',
    validate: (val) => val >= 18,
    message: 'age must be old than 18',
  },
}

const basic = {
  age: 1,
}

proy()
  .descriptor(descriptor)
  .validate(basic, (err) => {
    const currentErr = err[0].errLog
    test('custom message should be support', (t) => t.is(currentErr, descriptor.age.message))
  })
