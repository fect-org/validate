const test = require('ava')
const { proy } = require('../lib')

test('proy should provide source value when have not descriptor', (t) => {
  const basic = {
    name: 'test',
  }
  const draft = proy().descriptor({}).validte(basic).produce()
  t.is(basic.name, draft.name)
})

test('proy should provide a proxies object when validate error', (t) => {
  const basic = {
    name: 'test',
  }
  const descriptor = {
    name: {
      required: true,
      validate: (val) => val === 'kanno',
    },
  }
  let draft = proy().descriptor(descriptor).validte(basic).produce()
  t.is(draft.name, undefined)
  basic.name = 'kanno'
  draft = proy().descriptor(descriptor).validte(basic).produce()
  t.is(draft.name, 'kanno')
})
