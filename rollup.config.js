import commonjs from '@rollup/plugin-commonjs'
import path from 'path'

export default {
  input: path.join(__dirname, 'lib', 'index.js'),
  output: [
    {
      // exports: 'auto',
      dir: path.join(__dirname, 'dist', 'cjs'),
      entryFileNames: 'index.js',
      format: 'cjs',
    },
    {
      // exports: 'auto',
      dir: path.join(__dirname, 'dist', 'es'),
      entryFileNames: 'index.js',
      format: 'esm',
    },
  ],
  plugins: [commonjs()],
}
