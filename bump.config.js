import { define } from 'no-bump'

export default define({
  input: ['lib/index.js'],
  output: {
    sourceMap: false,
    exports: 'named',
  },
  internalPlugins: {
    swc: {
      jsc: {
        target: 'es2017',
      },
    },
  },
})
