const { proy } = require('../lib')

const descriptor = {
  name: {
    type: 'string',
    required: true,
  },
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
  name: null,
  age: 11,
}

const basic = proy()
const poxies = basic
  .descriptor(descriptor)
  .validate(unVerified, (err, fields) => {
    console.log(err)
    console.log(fields)
  })
  .produce()
